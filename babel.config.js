/* comando para inciar os pacotes
npm i -D @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver */

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current' /*converter o codigo para a versao mais recente do node*/
				}
			}
		],
		'@babel/preset-typescript' /** para enetender o codigo typescript */
	],
	plugins: [
		['module-resolver', { /* caminhos dos paths para reconhecer os @ no arquivo js */
			alias: {
				'@congis': '.src/congis',
				'@models': './src/models',
				'@controllers': './src/controllers',
				'@views': './src/views'
			}
		}]
	],
	ignore: [
		'**/*.spec.ts'
	]
};