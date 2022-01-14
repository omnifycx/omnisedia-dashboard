/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ActionBarEnUS } from '@/components/ActionBar';

import component from './pt-BR/component';
import globalHeader from './pt-BR/globalHeader';
import menu from './pt-BR/menu';
import pwa from './pt-BR/pwa';
import settingDrawer from './pt-BR/settingDrawer';
import settings from './pt-BR/setting';
import other from './pt-BR/other';
import Plugin from '../components/Plugin/locales/pt-BR';
import PluginFlow from '../components/PluginFlow/locales/pt-BR';
import RawDataEditor from '../components/RawDataEditor/locales/pt-BR';
import UpstreamComponent from '../components/Upstream/locales/pt-BR';

export default {
  'navBar.lang': 'Idiomas',
  'layout.user.link.help': 'Ajuda',
  'layout.user.link.privacy': 'Privacidade',
  'layout.user.link.terms': 'Termos',
  'app.preview.down.block': 'Baixe esta página para o seu projeto local',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...other,
  ...ActionBarEnUS,
  ...Plugin,
  ...PluginFlow,
  ...RawDataEditor,
  ...UpstreamComponent,
};
