import { __ } from '@wordpress/i18n';

import { Info } from 'lucide-react';

import {
	Card, CardContent, CardHeader, CardTitle,
	Column, Row, Container, PageTitle, Alert,
	AlertTitle, AlertDescription, Pricing
} from '@carbon-plugins/components';

export default function License() {
	return <>
		<PageTitle>{ __( 'License', 'carbon-blocks' ) }</PageTitle>
		<Container>
			<Column>
				<Card className='relative'>
					<CardHeader>
						<CardTitle>{ __( 'Manage license', 'carbon-blocks' ) }</CardTitle>
					</CardHeader>
					<CardContent>
						<Alert>
							<Info className="h-4 w-4"/>
							<AlertTitle>{ __("You are currently using the free version of Carbon Blocks", "carbon-blocks") }</AlertTitle>
							<AlertDescription>
								{ __("You can choose a plan below to start taking advantage of premium blocks, more animations, thousands new icons, premium support and much more !", "carbon-blocks") }
							</AlertDescription>
						</Alert>
					</CardContent>
				</Card>
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
