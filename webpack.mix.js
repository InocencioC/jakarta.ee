/*!
 * Copyright (c) 2018 Eclipse Foundation, Inc.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *
 * SPDX-License-Identifier: EPL-2.0
 */

require('./node_modules/eclipsefdn-solstice-assets/webpack-solstice-assets.mix.js');
let mix = require('laravel-mix');
mix.EclipseFdnSolsticeAssets();

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./less/styles.less', 'static/css/styles.css');
mix.less('./less/pages/about/why-jakarta-ee/styles.less', 'static/css/why-jakarta-ee-styles.css');
mix.less('./less/pages/learn.less', 'static/css/learn.css');
mix.less('./less/pages/sponsor.less', 'static/css/sponsor.css');

mix.js('js/main.js', './static/js/solstice.js');

mix.js('./js/contributor-cards/index.js', './static/js/release-page-cards.js');

