const defaultOptions = {
	concatenateModules: false
}

function modify(baseConfig, { target, dev }, webpack, userOptions = {}) {
	const options = Object.assign({}, defaultOptions, userOptions);
	const config = Object.assign({}, baseConfig);
	
	if (process.env.BUNDLE_ANALYZE === "true" && target === "web") {
		config.optimization.concatenateModules = options.concatenateModules
		config.plugins.push(
			new (require("webpack-bundle-analyzer")).BundleAnalyzerPlugin()
		)
	}

 return config;
}

module.exports = modify;
