---
title: Build a WordPress plugin settings screen with React
publishDate: 20220106
layout: layouts/post.liquid
tags:
    - post
---

WordPress is one of the leading and oldest content management systems on the web today and has a huge community of people contributing to the platform every day.

With that said, WordPress also has a ton of baggage and legacy code. While that takes lots of time and energy to change the platform and modernize it for everyone, that doesn’t mean solo developers can’t modernize parts of it through custom code and they do.

Today, I want to demonstrate of proof-of-concept method to integrate a standard `create-react-app` React application into a WordPress plugin settings screen, complete with authenticated WordPress API requests.

## The WordPress Part

The bulk of the magic comes from a PHP class written by [Ben Broide](https://bebroide.medium.com/), which I include inside of my own [GitHub repository](https://github.com/crock/wp-react-bridge) for this demo. You can view that class [here](https://github.com/crock/wp-react-bridge/blob/main/includes/react-plugin.php) or read Ben’s [blog post](https://medium.com/swlh/wordpress-create-react-app-integration-30b41657b79e) on how he created it.

To use Ben’s PHP class, all you need to do is create a new WordPress plugin. I’ll skip adding the standard plugin header as that is out of the scope of this tutorial and just get right into the meat of the demo.

First off, you need to define some constants that are used inside of Ben’s PHP class. Feel free to change the values to match your setup, but I included sensible defaults based on the lastest version of `create-react-app` and assuming you place the CRA project within your custom plugin’s directory inside of a directory called `web`.

```php
// Setting react app path constants.
define('RP_PLUGIN_VERSION','1.0.0' );
define('RP_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) . 'web/');
define('RP_REACT_APP_BUILD', RP_PLUGIN_DIR_URL . 'build/');
define('RP_MANIFEST_URL', RP_REACT_APP_BUILD . 'asset-manifest.json');
```

Next, we need to require Ben’s PHP class inside of our plugin so we can instantiate an instance of the class and call it’s methods to utilize its functionality.

```php
require(__DIR__ . '/includes/react-plugin.php');
```

Last but not least, we add a new function to simply instantiate Ben’s PHP class with some options along with a call to WordPress Core function add_action to activate it during the init hook. Take note of the arguments we pass to the class. This part is important and will be changed depending on where you want the React application to be rendered within the WordPress ACP.

```php{numberLines: true}
/**
 * Calling the plugin class with parameters.
 */
function rp_load_plugin(){
	// Loading the app in WordPress admin main screen.
	new RpLoadReactApp('admin_enqueue_scripts', 'index.php', false, '#wpbody .wrap');
}

add_action('init','rp_load_plugin');
```

In the code sample above, I am telling WordPress to replace the main dashboard screen of the WordPress ACP with our bundled React app, but if our plugin has a custom settings screen, you will want to change `index.php` to the name of the PHP template within our plugin or theme that renders our settings screen.

The final argument is the CSS selector to bind out React app too, so if you only wanted to render the React app in a specific element of the settings screen page, you can do that here. The provided selector would fill the entire settings screen minus some padding around the edges.

## The React Part

Now for the easy part. First, navigate to your custom plugin’s folder in your terminal of choice and run the following command to create a new React application that we can bundle with our plugin.

```bash
npx create-react-app web/
```

Or if you use `yarn` instead of NPM, you can run this command instead:

```bash
yarn create react-app web/
```

It’s important that if your plugin is going to be publicly downloadable that you bundle the pre-built React app with your WordPress plugin, so edit the generated `.gitignore` and remove the `build` directory, so it gets added to source control. This is because often times WordPress is run on shared hosting by non-technical users, so they would not understand how to install the node modules and build the React application.

## Bonus: Custom WordPress React Hook

I have went ahead and created a custom React hook for interacting with the WordPress API. It has the ability to make authenticated requests to both core API endpoints and third-party plugin endpoints because Ben’s PHP class adding the following lines.

```php
wp_localize_script( 'wp-api', 'wpApiSettings', array(
			'root' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' )
) );
```

Here is an example of how you can use my custom React hook. It is also included in the [demo repository](https://github.com/crock/wp-react-bridge).

```jsx{numberLines: true}
import useWordpress from './hooks/useWordpress';
import { useLayoutEffect, useState } from 'react';

function App() {
  const { resources } = useWordpress()
  const [data, setData] = useState(null)

  useLayoutEffect(() => {
    resources.core('posts', 'GET')
      .then((posts) => setData(posts))
			.catch(error => console.error(error))
  }, [])

  return (
    <div id="wp-react-bridge" className="bg-transparent dark:bg-gray-900">
      <p className="text-black dark:text-white">This is a React app embedded in a WordPress Admin Dashboard screen.</p>
			{ data ? <pre>{JSON.stringify(data, 0, 2)}</pre> : null }
    </div>
  );
}

export default App;
```

## Conclusion

To sum up, while we can’t change WordPress in its entirety, we can take steps to integrate modern development practices and workflows into our custom WordPress plugins and themes. Who knows, maybe the folks at Automattic will take notice!
