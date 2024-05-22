import { __ } from '@wordpress/i18n';

import { ShoppingCart, Info } from 'lucide-react';

import {
	Card, CardContent, CardDescription, CardHeader, CardTitle,
	Column, Row, Container, PageTitle, Alert, Button,
	AlertTitle, AlertDescription
} from '@carbon-plugins/components';

export default function License() {

	return <>
		<PageTitle>{ __( 'License', 'carbon-blocks' ) }</PageTitle>
		<Container>
			<Column>
				<Card className='relative'>
					<CardHeader>
						<CardTitle>{ __( 'Manage license', 'carbon-blocks-pro' ) }</CardTitle>
					</CardHeader>
					<CardContent>
						<Alert>
							<Info className="h-4 w-4"/>
							<AlertTitle>{ __("You are currently using the free version of Carbon Icons", "carbon-blocks") }</AlertTitle>
							<AlertDescription>
								{ __("You can choose a plan below to start taking advantage of thousands new icons, premium support and much more !", "carbon-blocks") }
							</AlertDescription>
						</Alert>
					</CardContent>
				</Card>
				<Row className="items-stretch">
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( 'Why not buy a yearly license ...', 'carbon-blocks' ) }</CardTitle>
							<CardDescription>{ __( 'Unlock the full Carbon Plugins experience: thousands of blocks, multiple libraries, all futur updates and premium support.', 'carbon-blocks' ) }</CardDescription>
						</CardHeader>
						<CardContent>
							<section className="flex flex-1 flex-wrap p-4 gap-4">
								<section class="flex flex-wrap gap-4 sm:w-8/12" style={{ minWidth: "200px" }}>
									<ul role="list" class="mb-8 space-y-4 text-left dark:text-gray-400">
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium blocks", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Slider blocks", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium block animations", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "More animations settings", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium text animations", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "4 premium icon libraries", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( 'Futur updates', 'carbon-blocks' ) } <span class="font-bold">{ __( '12 months', 'carbon-blocks' ) }</span></span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium support for", 'carbon-blocks' ) } <span class="font-bold">{ __( '12 months', 'carbon-blocks' ) }</span></span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( 'Online chat access for', 'carbon-blocks' ) } <span class="font-bold">{ __( '12 months', 'carbon-blocks' ) }</span></span>
										</li>
									</ul>
								</section>
								<section class="flex flex-1 flex-col items-center justify-center" style={{ minWidth: "200px" }}>
									<div class="flex justify-center items-baseline mb-4 dark:text-white">
										<span class="mr-2 text-5xl md:text-6xl font-extrabold">{ __( '$39', 'carbon-blocks' ) }</span>
										<span class="text-gray-500 dark:text-gray-400 dark:text-gray-400">/{ __( 'year', 'carbon-blocks' ) }</span>
									</div>
									<section className='flex flex-wrap gap-4 w-full'>
										<Button asChild>
											<a href='https://carbon-plugins.com/shop/?add-to-cart=292&quantity=1' target="_blank" className="flex-1 hover:text-primary-foreground focus:text-primary-foreground">
												<ShoppingCart className="mr-2 h-4 w-4" />
												{ __( 'Buy now', 'carbon-blocks' ) }
											</a>
										</Button>
										<Button asChild variant="outline">
											<a href='https://carbon-plugins.com/plugins/carbon-blocks/' target="_blank" className="flex-1">
												<Info className="mr-2 h-4 w-4" />
												{ __( 'Learn more', 'carbon-blocks' ) }
											</a>
										</Button>
									</section>
								</section>
							</section>
						</CardContent>
					</Card>
					<Card className='flex-1'>
						<CardHeader>
							<CardTitle>{ __( '... or a lifetime license ?', 'carbon-blocks' ) }</CardTitle>
							<CardDescription>{ __( 'Save more by buying a lifetime license and get full content, plugin updates and support, for ever.', 'carbon-blocks' ) }</CardDescription>
						</CardHeader>
						<CardContent>
							<section className="flex flex-1 flex-wrap p-4 gap-4">
								<section class="flex flex-wrap gap-4 sm:w-8/12" style={{ minWidth: "200px" }}>
									<ul role="list" class="mb-8 space-y-4 text-left dark:text-gray-400">
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium blocks", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Slider blocks", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium block animations", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "More animations settings", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium text animations", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "4 premium icon libraries", 'carbon-blocks' ) }</span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( 'Futur updates for', 'carbon-blocks' ) } <span class="font-bold">{ __( 'ever', 'carbon-blocks' ) }</span></span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( "Premium support for", 'carbon-blocks' ) } <span class="font-bold">{ __( 'ever', 'carbon-blocks' ) }</span></span>
										</li>
										<li class="flex items-center space-x-3">
											<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
											<span>{ __( 'Online chat access', 'carbon-blocks' ) } <span class="font-bold">{ __( 'ever', 'carbon-blocks' ) }</span></span>
										</li>
									</ul>
								</section>
								<section class="flex flex-1 flex-col items-center justify-center" style={{ minWidth: "200px" }}>
									<div class="flex justify-center items-baseline mb-4 dark:text-white">
										<span class="mr-2 text-5xl md:text-6xl font-extrabold">{ __( '$119', 'carbon-blocks' ) }</span>
										<span class="text-gray-500 dark:text-gray-400 dark:text-gray-400">{ __( 'once', 'carbon-blocks' ) }</span>
									</div>
									<section className='flex flex-wrap gap-4 w-full'>
										<Button asChild>
											<a href='https://carbon-plugins.com/shop/?add-to-cart=291&quantity=1' target="_blank" className="flex-1 hover:text-primary-foreground focus:text-primary-foreground">
												<ShoppingCart className="mr-2 h-4 w-4" />
												{ __( 'Buy now', 'carbon-blocks' ) }
											</a>
										</Button>
										<Button asChild variant="outline">
											<a href='https://carbon-plugins.com/plugins/carbon-blocks/' target="_blank" className="flex-1">
												<Info className="mr-2 h-4 w-4" />
												{ __( 'Learn more', 'carbon-blocks' ) }
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
