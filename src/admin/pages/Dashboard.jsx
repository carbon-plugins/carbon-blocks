import { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Repeat, ShoppingCart, Info, KeyRound, Bug, Mail, Star, Users } from 'lucide-react';
import { Switch, Button, Column, Row, Container, PageTitle, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@carbon-plugins/components';

export default function Dashboard({ data, setData, replayAnimationTour }) {

	const toggleDeleteAllOnRemove = useCallback(() => {
    setData({ type: "toggle_delete_all_on_remove" });
  }, [data]);

  return <>
		<PageTitle>{ __( 'Dashboard', 'carbon-blocks' ) }</PageTitle>

    <Container>
			<Column>
				<Row className="items-stretch">
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( "Settings", "carbon-blocks" ) }</CardTitle>
						</CardHeader>
						<CardContent>
							<section className="flex flex-row items-center justify-between rounded-lg border border-border p-4 gap-2">
								<p>{ __( "Delete all data on plugin remove", "carbon-blocks" ) }</p>
								<Switch
									checked={ data?.options?.deleteAllOnRemove }
									onCheckedChange={ toggleDeleteAllOnRemove }
								/>
							</section>
							<Button onClick={ replayAnimationTour } variant="outline" className='mt-4 w-full'>
								<Repeat className="mr-2 h-4 w-4" />
								{ __( "Replay animation tour", "carbon-blocks" ) }
							</Button>
						</CardContent>
					</Card>
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( 'Found a bug ? Need help ?', "carbon-blocks" ) }</CardTitle>
							<CardDescription>{ __( 'Please contact us if you found a bug or if you have any question.', "carbon-blocks" ) }</CardDescription>
						</CardHeader>
						<CardContent className='gap-4 flex flex-col'>
							<Button variant="outline" asChild>
								<a href="https://carbon-plugins.com/support/" target="_blank">
									<KeyRound className="mr-2 h-4 w-4" />
									{ __( 'Help with my license key', "carbon-blocks" ) }
								</a>
							</Button>
							<Button variant="outline" asChild>
								<a href="https://carbon-plugins.com/support/" target="_blank">
									<Bug className="mr-2 h-4 w-4" />
									{ __( 'Bug with the plugin', "carbon-blocks" ) }
								</a>
							</Button>
							<Button variant="outline" asChild>
								<a href="https://carbon-plugins.com/contact/" target="_blank">
									<Mail className="mr-2 h-4 w-4" />
									{ __( 'Other question', "carbon-blocks" ) }
								</a>
							</Button>
						</CardContent>
					</Card>
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( 'Leave us a review !', "carbon-blocks" ) }</CardTitle>
							<CardDescription>{ __( 'Are you happy with our plugin ?', "carbon-blocks" ) }</CardDescription>
						</CardHeader>
						<CardContent>
							<Button variant="outline" asChild className='w-full'>
								<a href="https://wordpress.org/support/plugin/carbon-blocks/reviews/#new-post" target="_blank">
									<Star className="mr-2 h-4 w-4" />
									{ __( 'Leave a review', "carbon-blocks" ) }
								</a>
							</Button>
							<CardHeader className='pl-0'>
								<CardTitle>{ __( 'The community', "carbon-blocks" ) }</CardTitle>
								<CardDescription>{ __( 'Find community help with our support threads !', "carbon-blocks" ) }</CardDescription>
							</CardHeader>
							<Button variant="outline" asChild className='w-full'>
								<a href="https://wordpress.org/support/plugin/carbon-blocks/" target="_blank">
									<Users className="mr-2 h-4 w-4" />
									{ __( 'Read the threads', "carbon-blocks" ) }
								</a>
							</Button>
						</CardContent>
					</Card>
				</Row>
				<Row className="items-stretch">
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( 'Why not buy a yearly license ...', 'carbon-icons' ) }</CardTitle>
							<CardDescription>{ __( 'Unlock the full Carbon Icons experience: thousands of icons, multiple libraries, all futur updates and premium support.', 'carbon-icons' ) }</CardDescription>
						</CardHeader>
						<CardContent>
							<section className="flex flex-1 flex-wrap p-4 gap-4">
								<section className="flex flex-wrap gap-4 2xl:w-8/12" style={{ minWidth: "200px" }}>
									<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to WordPress icons library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Dashicon library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Classic Icons library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to 7300+ Advanced Icons library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Animated library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Logo library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Flag library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__("License for 1 website", "carbon-icons")}</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__('Futur updates for', "carbon-icons")} <span className="font-bold">{ __('12 months', "carbon-icons") }</span></span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__('Premium support for', "carbon-icons")} <span className="font-bold">{ __('12 months', "carbon-icons") }</span></span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__('Online chat access', "carbon-icons")}</span>
										</li>
									</ul>
								</section>
								<section className="flex flex-1 flex-col items-center justify-center" style={{ minWidth: "200px" }}>
									<div className="flex justify-center items-baseline mb-4 dark:text-white">
										<span className="mr-2 text-5xl md:text-6xl font-extrabold">{ __( '$39', "carbon-icons" ) }</span>
										<span className="text-gray-500 dark:text-gray-400 dark:text-gray-400">/{ __( 'year', "carbon-icons" ) }</span>
									</div>
									<section className='flex flex-wrap gap-4 w-full'>
										<Button asChild>
											<a href='https://shop.carbon-plugins.com/?add-to-cart=292&quantity=1' target="_blank" className="flex-1 hover:text-primary-foreground focus:text-primary-foreground">
												<ShoppingCart className="mr-2 h-4 w-4" />
												{ __( 'Buy now', 'carbon-icons' ) }
											</a>
										</Button>
										<Button asChild variant="outline">
											<a href='https://carbon-plugins.com/plugins/carbon-icons/' target="_blank" className="flex-1">
												<Info className="mr-2 h-4 w-4" />
												{ __( 'Learn more', 'carbon-icons' ) }
											</a>
										</Button>
									</section>
								</section>
							</section>
						</CardContent>
					</Card>
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( '... or a lifetime license ?', 'carbon-icons' ) }</CardTitle>
							<CardDescription>{ __( 'Save more by buying a lifetime license and get full content, plugin updates and support, for ever.', 'carbon-icons' ) }</CardDescription>
						</CardHeader>
						<CardContent>
							<section className="flex flex-1 flex-wrap p-4 gap-4">
								<section className="flex flex-wrap gap-4 2xl:w-8/12" style={{ minWidth: "200px" }}>
									<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to WordPress icons library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Dashicon library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Classic Icons library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to 7300+ Advanced Icons library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Animated library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Logo library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Access to Flag library", "carbon-icons" ) }</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__("License for 1 website", "carbon-icons")}</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__('Futur updates for', "carbon-icons")} <span className="font-bold">{ __('ever', "carbon-icons") }</span></span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__('Premium support for', "carbon-icons")} <span className="font-bold">{ __('ever', "carbon-icons") }</span></span>
										</li>
										<li className="flex items-center space-x-3">
											<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{__('Online chat access', "carbon-icons")}</span>
										</li>
									</ul>
								</section>
								<section className="flex flex-1 flex-col items-center justify-center" style={{ minWidth: "200px" }}>
									<div className="flex justify-center items-baseline mb-4 dark:text-white">
										<span className="mr-2 text-5xl md:text-6xl font-extrabold">{ __( '$119', "carbon-icons" ) }</span>
										<span className="text-gray-500 dark:text-gray-400 dark:text-gray-400">{ __( 'once', "carbon-icons" ) }</span>
									</div>
									<section className='flex flex-wrap gap-4 w-full'>
										<Button asChild>
											<a href='https://shop.carbon-plugins.com/?add-to-cart=291&quantity=1' target="_blank" className="flex-1 hover:text-primary-foreground focus:text-primary-foreground">
												<ShoppingCart className="mr-2 h-4 w-4" />
												{ __( 'Buy now', 'carbon-icons' ) }
											</a>
										</Button>
										<Button asChild variant="outline">
											<a href='https://carbon-plugins.com/plugins/carbon-icons/' target="_blank" className="flex-1">
												<Info className="mr-2 h-4 w-4" />
												{ __( 'Learn more', 'carbon-icons' ) }
											</a>
										</Button>
									</section>
								</section>
							</section>
						</CardContent>
					</Card>
				</Row>
			</Column>
		</Container>
  </>
}
