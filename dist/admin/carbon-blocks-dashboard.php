<?php
	$our_plugins = [
		"Carbon Icons" => [
			"Name" => "Carbon Icons",
			"Description" => __( "Enhance your content creation with Carbon Icons, a dynamic WordPress plugin designed to elevate your block editor experience. Choose from an extensive selection of modern and complexe SVG icons to effortlessly enrich your website's appearance.", "carbon-blocks" ),
			"Dashboard" => home_url( "/wp-admin/admin.php?page=carbon_icons#/" ),
			"License" => home_url( "/wp-admin/admin.php?page=carbon_icons#/license/" ),
			"GetStarted" => "https://wordpress.org/plugins/carbon-icons/",
			"LearnMore" => "https://carbon-plugins.com/carbon-icons/",
			"isComing" => false
		],
		"Carbon Blocks" => [
			"Name" => "Carbon Blocks",
			"Description" => __( "Unleash your creativity with Carbon Blocks, an ingenious WordPress plugin that expands the potential of your block editor. Seamlessly create captivating layouts and designs to enrich your website's visual appeal.", "carbon-blocks" ),
			"Dashboard" => home_url( "/wp-admin/admin.php?page=carbon_blocks#/" ),
			"License" => home_url( "/wp-admin/admin.php?page=carbon_blocks#/license" ),
			"GetStarted" => "https://wordpress.org/plugins/carbon-blocks/",
			"LearnMore" => "https://carbon-plugins.com/carbon-blocks/",
			"isNew" => true,
			"isComing" => false
		],
		"Carbon Sliders" => [
			"Name" => "Carbon Sliders",
			"Description" => __( "Engage your visitors with Carbon Sliders, an exceptional WordPress plugin designed to help you build captivating image and content sliders effortlessly. Elevate your website's appeal and leave a lasting impression on your audience.", "carbon-blocks" ),
			"Dashboard" => home_url( "/wp-admin/admin.php?page=carbon_sliders#/" ),
			"License" => home_url( "/wp-admin/admin.php?page=carbon_sliders#/license" ),
			"GetStarted" => "https://wordpress.org/plugins/carbon-sliders/",
			"LearnMore" => "https://carbon-plugins.com/carbon-sliders/",
			"isNew" => false,
			"isComing" => true
		]
	];
?>

<section class="carbon-plugins">
	<h1>
		<?php
			$current_time 			= current_time('H:i');
			$morning_message 		= __("Good morning ", "carbon-blocks");
			$afternoon_message 	= __("Good afternoon ", "carbon-blocks");
			$evening_message 		= __("Good evening ", "carbon-blocks");
			$night_message 			= __("Good night ", "carbon-blocks");
			$hour 							= (int)date('H', strtotime($current_time));

			if ($hour >= 5 && $hour < 12) {
				echo esc_html($morning_message);
			} elseif ($hour >= 12 && $hour <= 18) {
				echo esc_html($afternoon_message);
			} elseif ($hour >= 18 && $hour <= 23) {
				echo esc_html($evening_message);
			} else {
				echo esc_html($night_message);
			}

			if (is_user_logged_in()) {
				$current_user = wp_get_current_user();
				$user_name 		= $current_user->display_name;
				$user_name 		= ucfirst($user_name);
				echo esc_html($user_name . "!");
			} else {
				echo esc_html( __("guest !", "carbon-blocks") );
			}
		?>
	</h1>
	<div>
		<section class="carbon-plugins__plugins">
			<section class="carbon-plugins__installed">
				<h2><?php echo esc_html( __( "Currently installed plugins", "carbon-blocks" ) ); ?></h2>
				<?php
					$plugins 					= get_plugins();
					$active_plugins 	= array();
					$inactive_plugins = array();

					foreach ($plugins as $plugin => $plugin_info) :
						foreach ($our_plugins as $key => $value) {
							if ($key . " Pro" === $plugin_info["Name"] || $key === $plugin_info["Name"]) {
								$active = is_plugin_active($plugin);
								if ($active) {
									$active_plugins[$plugin_info["Name"]] = $value;
								} else {
									$inactive_plugins[$plugin_info["Name"]] = $value;
								}
								break;
							}
						}
					endforeach;

					foreach ($active_plugins as $key => $value) : ?>
						<article class="active">
							<header>
								<h3><?php echo esc_html( $key ); ?></h3>
								<span class="badge minor">
									<span class="flex w-3 h-3 rounded-full"></span>
									<?php echo esc_html( __( "Active", "carbon-blocks" ) ); ?>
								</span>
							</header>
							<section>
								<a href="<?php echo esc_html( $value["Dashboard"] ); ?>" class="button is-small is-outline">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
									</svg>
									<?php echo esc_html( __("Dashboard", "carbon-blocks") ); ?>
								</a>
								<a href="<?php echo esc_html( $value["License"] ); ?>" class="button is-small is-outline">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
									</svg>
									<?php echo esc_html( __("License", "carbon-blocks") ) ?>
								</a>
							</section>
						</article>
					<?php endforeach;

					foreach ($inactive_plugins as $key => $value) : ?>
						<article class="inactive">
							<header>
								<h3><?php echo esc_html( $key ); ?></h3>
								<span class="badge major">
									<span class="flex w-3 h-3 rounded-full"></span>
									<?php echo esc_html( __("Inactive", "carbon-blocks") ); ?>
								</span>
							</header>
						</article>
					<?php endforeach;
				?>
			</section>
			<section class="carbon-plugins__others">
				<h2><?php echo esc_html( __("Our other plugins", "carbon-blocks") ); ?></h2>
					<?php
						$installed_plugin_names 		= array_column($plugins, 'Name');
						$cbn_icns_pro_installed = in_array('Carbon Icons Pro', $installed_plugin_names);
						$missing_plugins 						= array_diff_key($our_plugins, array_flip($installed_plugin_names));

						if ($cbn_icns_pro_installed && isset($missing_plugins['Carbon Icons'])) :
							unset($missing_plugins['Carbon Icons']);
						endif;

						if (!empty($missing_plugins)) :
							foreach ($missing_plugins as $plugin_name => $plugin_data) :
								$isNew = $plugin_data["isNew"];
								$isComing = $plugin_data["isComing"]; ?>
								<article class="<?php echo $isNew ? esc_html( "is-new" ) : ( $isComing ? esc_html( "is-coming" ) : esc_html( "" ) ); ?>">
									<header>
										<h3><?php echo esc_html( $plugin_name ); ?></h3>
										<?php if($isNew) : ?>
										<span class="badge is-new"><?php echo esc_html( __( "New", "carbon-blocks" ) ); ?></span>
										<?php endif; ?>
										<?php if($isComing) : ?>
											<span class="badge is-coming"><?php echo esc_html( __( "Coming soon", "carbon-blocks" ) ); ?></span>
										<?php endif; ?>
									</header>
									<p><?php echo esc_html( $plugin_data["Description"] ); ?></p>
									<?php if(!$isComing) : ?>
										<section>
											<a href="<?php echo esc_html( $plugin_data["GetStarted"] ); ?>" class="button">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
												</svg>
												<?php echo esc_html( __( "Get started", "carbon-blocks" ) ); ?>
											</a>
											<a href="<?php echo esc_html( $plugin_data["LearnMore"] ); ?>" class="button is-outline">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
												</svg>
												<?php echo esc_html( __( "Learn more", "carbon-blocks" ) ); ?>
											</a>
										</section>
									<?php endif; ?>
								</article>
							<?php endforeach;
						else :
							echo '<p>' .esc_html( __("All plugins are installed ! Thank you for your loyalty :)", "carbon-blocks") ) . '</p>';
						endif;
					?>
			</section>
		</section>
		<?php if (function_exists('simplexml_load_file')) : ?>
			<section class="carbon-plugins__rss">
				<section class="carbon-plugins__releases">
					<h2><?php echo esc_html( __( "Latest releases", "carbon-blocks" ) ); ?></h2>
					<section>
						<?php
							$rss_feed_url 		= 'https://carbon-plugins.com/releases.xml';
							$xml 							= simplexml_load_file($rss_feed_url);
							if ($xml) :
								foreach ($xml->channel->item as $item) :
									?> <a href="<?php echo esc_html( $item->link ); ?>">
										<article>
											<header>
												<span class="badge minor"><?php echo esc_html( $item->version ); ?></span>
												<p><?php echo esc_html( date('d/m/Y', strtotime($item->pubDate)) ); ?></p>
											</header>
											<h3><?php echo esc_html( $item->title ); ?></h3>
											<p><?php echo esc_html( $item->description ); ?></p>
											<p>
												<?php echo esc_html( __("Read more", "carbon-blocks") ); ?>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
											</p>
										</article>
									</a>
								<?php endforeach;
							else :
								echo esc_html( __("Cannot read RSS.", "carbon-blocks") );
							endif;
						?>
					</section>
				</section>
				<section class="carbon-plugins__news">
					<h2><?php echo esc_html( __("News from our blog", "carbon-blocks") ); ?></h2>
					<section>
						<?php
							$rss_feed_url 		= 'https://carbon-plugins.com/news.xml';
							$xml 							= simplexml_load_file($rss_feed_url);
							if ($xml) :
								foreach ($xml->channel->item as $item) :
									?> <a href="<?php echo esc_html( $item->link ); ?>">
										<article>
											<header>
												<span class="badge is-new"><?php echo esc_html( $item->category ); ?></span>
												<p><?php echo esc_html( date('d/m/Y', strtotime($item->pubDate)) ); ?></p>
											</header>
											<h3><?php echo esc_html( $item->title ); ?></h3>
											<p><?php echo esc_html( $item->description ); ?></p>
											<p>
												<?php echo esc_html( __("Read more", "carbon-blocks") ); ?>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
											</p>
										</article>
									</a>
								<?php endforeach;
									else :
										echo esc_html( __("Cannot read RSS.", "carbon-blocks") );
									endif;
							?>
					</section>
				</section>
			</section>
		<?php endif; ?>
	</div>
</section>
