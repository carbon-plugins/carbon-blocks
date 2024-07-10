import { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Repeat, KeyRound, Bug, Mail, Star, Users } from 'lucide-react';
import {
	Switch, Button, Column, Row, Container, PageTitle,
	Card, CardContent, CardDescription, CardHeader, CardTitle,
	Pricing
} from '@carbon-plugins/components';

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
							<section className="flex flex-col items-center justify-between rounded-lg border border-border p-4 gap-2 mt-4">
								<p className='flex justify-between items-center w-full'>Current plugin version : <span>{ data.version }</span></p>
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
				<Row className="items-stretch" >
					<Card className='relative' style={{ width: "100%" }}>
						<CardHeader>
							<CardTitle>{ __( 'Why not buy a premium license?', 'carbon-blocks' ) }</CardTitle>
						</CardHeader>
						<CardContent>
							<Pricing plugin="carbon-blocks" />
						</CardContent>
					</Card>
				</Row>
			</Column>
		</Container>
  </>
}
