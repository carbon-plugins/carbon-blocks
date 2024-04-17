import './style.scss';
import { HashRouter, Route, Routes, useLocation } 			from 'react-router-dom';
import { useState, useEffect, useCallback, StrictMode } from 'react';
import { ToastContainer, toast } 												from 'react-toastify';
import { useImmerReducer } 															from "use-immer";
import { driver } 																			from "driver.js";
import { createRoot } 																	from 'react-dom/client';

import { ToggleTheme, Menu, Loader, Indicator, Button } from '@carbon-plugins/components';

import apiFetch 																				from "@wordpress/api-fetch";
import { __ } 																					from '@wordpress/i18n';

import { reducer } 			 from "./helpers/reducers";
import { config, links } from './helpers/config';
import Footer 					 from './components/Footer';

import License 		from "./pages/License";
import Dashboard 	from "./pages/Dashboard";
import { ConditionalRender } from './components/conditional-render';

function Router() {
  const [ data, setData ]             = useImmerReducer( reducer, {} );
  const [ startState, setStartState ] = useState( {} );
  const [ isLoading, setLoading ] 		= useState( false );
  const [ canSave, setCanSave ] 			= useState( false );
  const [ isErrored, setIsErrored ] 	= useState( false );
  const location = useLocation();
	const driverObj = driver({
		showProgress: true,
		onDestroyStarted: () => {
			if(!data.options.tourIsFinished) {
				apiFetch({
					path: config.apiPath,
					method: 'POST',
					data: { ...data, options: { ...data.options, tourIsFinished: true } },
				}).then(() => {
					setStartState({ ...data, options: { ...data.options, tourIsFinished: true } });
					setData({ type: 'SET_OPTIONS', options: { ...data.options, tourIsFinished: true } });
				});
			}
			driverObj.destroy();
		},
		steps: [
			{ element: '#carbon-blocks nav li:first-of-type a', popover: { title: __( 'Your dashboard', 'carbon-blocks' ), description: __( 'You will find every setting and useful links on this page.', 'carbon-blocks' ), side: "right", align: 'end' } },
			{ element: '#carbon-blocks nav li:last-of-type a', popover: { title: __( 'License settings', 'carbon-blocks' ), description: __( 'Here, you will be able to manage your license.', 'carbon-blocks' ), side: "right", align: 'end' } },
			{ element: 'nav > section > button:first-of-type', popover: { title: __( 'Dark mode' ), description: __( 'Toggle the light/dark theme and choose the colors that suit you best.', 'carbon-blocks' ), side: "bottom", align: 'end' } },
			{ element: '#carbon-blocks nav >section button:last-of-type', popover: { title: __( 'Save your changes', 'carbon-blocks' ), description: __( 'Don\'t forget to save data after every change on this page !', 'carbon-blocks' ), side: "bottom", align: 'end' } },
			{ popover: { title: __( "Congrats !", 'carbon-blocks' ), description: __( "You are now ready to get started with Carbon Blocks, have fun !", 'carbon-blocks' ) } }
		]
	});
	const replayAnimationTour = () => driverObj.drive();

	useEffect(() => checkDirtiness(), [data]);

  useEffect(() => window.scrollTo(0, 0), [location]);

  useEffect(() => {
		apiFetch({ path: config.apiPath })
		.then((data) => {
			setStartState(data);
      setData({ type: 'SET_DATA', data: { ...data } });
			if(!data.options.tourIsFinished) {
				driverObj.drive();
			}
		})
		.catch(error => {
			setIsErrored(error)
		});
  }, []);

  const handleSave = useCallback(( e, callback ) => {
		e && e.preventDefault();
    setLoading( true );
    const save = apiFetch({
      path: config.apiPath,
      method: 'POST',
      data: { ...data },
    }).then(() => {
			setStartState({ ...data });
      setData({ type: 'SET_DATA', data: { ...data } });
      setLoading( false );
      setCanSave( false );
			callback && callback();
    });
		toast.promise(save, {
			pending: {
				render(){
					return __('Saving...', 'carbon-blocks' )
				}
			},
			success: {
				render({data}){
					return __('Successfully saved !', 'carbon-blocks' );
				}
			},
			error: {
				render({data}){
					return __('Error while saving', 'carbon-blocks' );
				}
			}
		} );
  }, [data])

  const checkDirtiness = () => setCanSave( JSON.stringify(startState) !== JSON.stringify(data) );


  return  (
    <section class="flex flex-col bg-background relative" style={{ minHeight: "calc(100vh - 32px)" }}>
			<Loader
				isErrored={ isErrored }
				data={ data }
				infoLabel={ __( "Info", 'carbon-blocks' ) }
				messageLabel={ __( "Oh snapp ! Something went wrong", 'carbon-blocks' ) }
				reloadLabel={ __( "Reload the page", 'carbon-blocks' ) }
				contactLabel={ __( "Contact us" ) }
			>
				<form class={`${isLoading && "opacity-50 pointer-events-none"} relative`} onSubmit={ handleSave }>
					<nav class="z-50 shadow-md border-b border-border bg-background flex max-sm:flex-col gap-4 items-center max-md:flex-wrap justify-between sticky w-full top-8 z-10">
						<Menu links={links} currentPath={location}/>
						<section className="text-foreground flex flex-wrap gap-2 mr-4 max-md:mb-4 pl-2 md:justify-end">
							<Indicator
								validLabel={ __( 'License is active', 'carbon-blocks' ) }
								invalidLabel={ __( 'License is not active', 'carbon-blocks' ) }
								status={ data?.license?.key && data?.license?.isActive }
							/>
							<ToggleTheme />
							<Button disabled={ !canSave } type="submit">
								<ConditionalRender conditions={ isLoading }>
									{ __( "Saving", 'carbon-blocks' ) }
								</ConditionalRender>
								<ConditionalRender conditions={ !isLoading }>
									{ __( "Save", 'carbon-blocks' ) }
								</ConditionalRender>
							</Button>
						</section>
					</nav>
					<main class="p-4">
						<Routes>
							<Route exact path='/' element={
								<Dashboard
									data={ data }
									setData={ setData }
									replayAnimationTour={ replayAnimationTour }
								/>
							} />
							<Route exact path='/license' element={
								<License />
							} />
						</Routes>
					</main>
				</form>
			</Loader>

			<ToastContainer
				position="top-right"
				autoClose={10000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

      <Footer />
    </section>
  )
}

document.addEventListener( 'DOMContentLoaded', function() {
  const element = document.getElementById( config.appId );
  if( typeof element !== 'undefined' && element !== null ) {
		const root = createRoot(element);
    root.render(
			<StrictMode>
				<HashRouter basename="/">
					<Router/>
				</HashRouter>
			</StrictMode>,
			document.getElementById( config.appId )
		);
  }
} );
