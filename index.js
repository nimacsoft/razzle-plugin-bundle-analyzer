const defaultOptions = {
	concatenateModules: false
}

function modify(baseConfig, { target, dev }, webpack, userOptions = {}) {
	const options = Object.assign({}, defaultOptions, userOptions);
	const config = Object.assign({}, baseConfig);

	if (process.env.BUNDLE_ANALYZE === "true" && target === "web") {
		const {
			concatenateModules,
			...bundleAnalyzerOptions = {}
		} = options

		config.optimization.concatenateModules = concatenateModules
		config.plugins.push(
			new (require("webpack-bundle-analyzer")).BundleAnalyzerPlugin(bundleAnalyzerOptions)
		)
	}

	return config;
}

module.exports = modify;
