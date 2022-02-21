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
export default {
  'page.route.button.returnList': 'Ir para lista',
  'page.route.button.send': 'Enviar',
  'page.route.onlineDebug': 'Depuração online',
  'page.route.pluginTemplateConfig': 'Configuração de modelo de plug-in',

  'page.route.parameterPosition': 'Posição do parâmetro',
  'page.route.httpRequestHeader': 'Cabeçalho de solicitação HTTP',
  'page.route.requestParameter': 'Parâmetro de solicitação',
  'page.route.postRequestParameter': 'Parâmetro de solicitação POST',
  'page.route.builtinParameter': 'Parâmetro interno',
  'page.route.parameterName': 'Nome do parâmetro',
  'page.route.operationalCharacter': 'Caráter Operacional',
  'page.route.equal': 'Igual(==)',
  'page.route.unequal': 'Desigual(~=)',
  'page.route.greaterThan': 'Maior que(>)',
  'page.route.lessThan': 'Menor que(<)',
  'page.route.regexMatch': 'Regex Match(~~)',
  'page.route.caseInsensitiveRegexMatch': 'Correspondência regular sem distinção entre maiúsculas e minúsculas (~*)',
  'page.route.in': 'IN',
  'page.route.has': 'HAS',
  'page.route.reverse': 'Inverter o resultado(!)',
  'page.route.rule': 'Regra',
  'page.route.httpHeaderName': 'Nome do cabeçalho da solicitação HTTP',
  'page.route.service': 'Serviço',
  'page.route.instructions': 'Instruções',
  'page.route.import': 'Importar',
  'page.route.createRoute': 'Criar rota',
  'page.route.editRoute': 'Configurar rota',

  'page.route.input.placeholder.parameterNameHttpHeader': 'Solicitar nome do cabeçalho, por exemplo: HOST',
  'page.route.input.placeholder.parameterNameRequestParameter': 'Nome do parâmetro, por exemplo: id',
  'page.route.input.placeholder.requestUrl': 'por favor, insira o URL de solicitação válido',
  'page.route.input.placeholder.paramKey': 'Param Key',
  'page.route.input.placeholder.paramValue': 'Param Value',
  'page.route.input.placeholder.paramType': 'Tipo de parâmetro',

  'page.route.form.itemRulesRequiredMessage.parameterName':
    'Somente letras e números são suportados e só podem começar com letras',
  'page.route.value': 'Valor do parâmetro',
  'page.route.panelSection.title.advancedMatchRule': 'Condições de correspondência de roteamento avançadas',

  'page.route.panelSection.title.nameDescription': 'Nome e descrição',
  'page.route.form.itemRulesPatternMessage.apiNameRule': 'O comprimento máximo deve ser de apenas 100',

  'page.route.panelSection.title.requestConfigBasicDefine': 'Solicitar definição básica',
  'page.route.form.itemLabel.httpMethod': 'Método HTTP',
  'page.route.form.itemLabel.scheme': 'Esquema',
  'page.route.form.itemLabel.priority': 'Prioridade',
  'page.route.form.itemLabel.redirect': 'Redirect',
  'page.route.select.option.enableHttps': 'Ativar HTTPS',
  'page.route.select.option.configCustom': 'Personalizado',
  'page.route.select.option.forbidden': 'Proibido',
  'page.route.form.itemLabel.redirectCustom': 'Redirecionamento personalizado',
  'page.route.input.placeholder.redirectCustom': 'Por exemplo: /foo/index.html',
  'page.route.select.option.redirect301': '301(Redirecionamento permanente)',
  'page.route.select.option.redirect302': '302(Redirecionamento temporário)',
  'page.route.form.itemLabel.username': 'Nome de usuário',
  'page.route.form.itemLabel.password': 'Senha',
  'page.route.form.itemLabel.token': 'Token',
  'page.route.form.itemLabel.apikey': 'Apikey',

  'page.route.form.itemExtraMessage.domain':
    'Nome de domínio ou IP, suporte para nome de domínio genérico, por exemplo: *.test.com',
  'page.route.form.itemRulesPatternMessage.domain':
    'Somente letras, números, -,_ e * são suportados, mas * precisa estar no início.',
  'page.route.form.itemExtraMessage1.path':
    'Caminho do pedido HTTP, por exemplo: /foo/index.html, suporta o prefixo do caminho do pedido /foo/* ; /* representa todos os caminhos',
  'page.route.form.itemRulesPatternMessage.remoteAddrs':
    'Por favor, insira um endereço IP válido, por exemplo: 192.168.1.101, 192.168.1.0/24, ::1, fe80::1, fe80::1/64',
  'page.route.form.itemExtraMessage1.remoteAddrs':
    'IP do cliente, por exemplo: 192.168.1.101, 192.168.1.0/24, ::1, fe80::1, fe80::1/64',

  'page.route.httpAction': 'Ação',
  'page.route.httpOverrideOrCreate': 'Substituir/Criar',
  'page.route.panelSection.title.httpOverrideRequestHeader': 'Substituir cabeçalho de solicitação HTTP',
  'page.route.status': 'Status',
  'page.route.groupName': 'GroupName',
  'page.route.offline': 'Offline',
  'page.route.publish': 'Publicar',
  'page.route.published': 'Publicado',
  'page.route.unpublished': 'Não publicado',

  'page.route.select.option.inputManually': 'Inserir manualmente',
  'page.route.select.option.methodRewriteNone': 'Não modificar',
  'page.route.form.itemLabel.domainNameOrIp': 'Nome de domínio/IP',
  'page.route.form.itemExtraMessage.domainNameOrIp':
    'Ao usar Nome de Domínio, ele analisará o local: /etc/resolv.conf por padrão',
  'page.route.portNumber': 'Número da porta',
  'page.route.weight': 'Peso',
  'page.route.radio.staySame': 'Permanecer o mesmo',
  'page.route.form.itemLabel.newPath': 'Novo caminho',
  'page.route.form.itemLabel.newHost': 'Novo Host',
  'page.route.form.itemLabel.regex': 'Regexp',
  'page.route.form.itemLabel.template': 'Modelo',
  'page.route.form.itemLabel.URIRewriteType': 'Substituição de URI',
  'page.route.form.itemLabel.hostRewriteType': 'Host Override',
  'page.route.form.itemLabel.methodRewrite': 'Substituição de método',
  'page.route.form.itemLabel.redirectURI': 'URI de redirecionamento',
  'page.route.input.placeholder.newPath': 'Por exemplo: /foo/bar/index.html',

  'page.route.steps.stepTitle.defineApiRequest': 'Definir solicitação de API',
  'page.route.steps.stepTitle.defineApiBackendServe': 'Definir servidor de back-end da API',

  'page.route.popconfirm.title.offline': 'Tem certeza de que esta rota está off-line?',
  'page.route.radio.static': 'Estático',
  'page.route.radio.regex': 'Regex',
  'page.route.form.itemLabel.from': 'De',
  'page.route.form.itemHelp.status':
    'Se uma rota pode ser usada depois de criada, o valor padrão é false.',

  'page.route.host': 'Host',
  'page.route.path': 'Caminho',
  'page.route.remoteAddrs': 'Remote Addrs',
  'page.route.PanelSection.title.defineRequestParams': 'Definir parâmetros de solicitação',
  'page.route.PanelSection.title.responseResult': 'Resultado da resposta',
  'page.route.debug.showResultAfterSendRequest': 'Mostrar resultado após enviar solicitação',
  'page.route.TabPane.queryParams': 'Parâmetros de consulta',
  'page.route.TabPane.bodyParams': 'Parâmetros do corpo',
  'page.route.TabPane.headerParams': 'Parâmetros de cabeçalho',
  'page.route.TabPane.authentication': 'Autenticação',
  'page.route.TabPane.response': 'Resposta',
  'page.route.TabPane.header': 'Cabeçalho de resposta',
  'page.route.debugWithoutAuth': 'Esta solicitação não usa nenhuma autorização.',
  'page.route.button.exportOpenApi': 'Exportar OpenAPI',
  'page.route.exportRoutesTips': 'Por favor, escolha o tipo de arquivo que deseja exportar',
  'page.route.button.importOpenApi': 'Importar OpenAPI',
  'page.route.button.selectFile': 'Por favor, selecione o arquivo',
  'page.route.list': 'Lista de rotas',
  'page.route.panelSection.title.requestOverride': 'Solicitar substituição',
  'page.route.form.itemLabel.headerRewrite': 'Substituição de cabeçalho',
  'page.route.tooltip.pluginOrchOnlySupportChrome': 'A orquestração de plug-ins é compatível apenas com o Chrome.',
  'page.route.tooltip.pluginOrchWithoutProxyRewrite':
    'O modo de orquestração de plug-ins não pode ser usado quando a substituição de solicitação é configurada na Etapa 1.',
  'page.route.tooltip.pluginOrchWithoutRedirect':
    'O modo de orquestração de plug-ins não pode ser usado quando Redirecionar na Etapa 1 é selecionado para habilitar HTTPS.',

  'page.route.tabs.normalMode': 'Normal',
  'page.route.tabs.orchestration': 'Orquestração',

  'page.route.list.description':
    'Route é o ponto de entrada de um pedido, que define as regras de correspondência entre um pedido de cliente e um serviço. Uma rota pode ser associada a um serviço (Serviço), um upstream (Upstream), um serviço pode corresponder a um conjunto de rotas e uma rota pode corresponder a um objeto upstream (um conjunto de nós de serviço de back-end), de modo que cada solicitação corresponda para uma rota será feito proxy pelo gateway para o serviço upstream vinculado à rota.',

  'page.route.configuration.name.rules.required.description': 'Por favor, insira o nome da rota',
  'page.route.configuration.name.placeholder': 'Por favor, digite o nome da rota',
  'page.route.configuration.desc.tooltip': 'Por favor, insira a descrição da rota',
  'page.route.configuration.publish.tooltip':
    'Usado para controlar se uma rota é publicada no gateway imediatamente após sua criação',
  'page.route.configuration.version.placeholder': 'Por favor, insira o número da versão de roteamento',
  'page.route.configuration.version.tooltip': 'Número da versão da rota, ex. V1',
  'page.route.configuration.normal-labels.tooltip':
    'Adicionar rótulos personalizados a rotas que podem ser usadas para agrupamento de rotas.',

  'page.route.configuration.path.rules.required.description':
    'Por favor, insira um caminho de solicitação HTTP válido',
  'page.route.configuration.path.placeholder': 'Por favor, insira o caminho da solicitação HTTP',
  'page.route.configuration.remote_addrs.placeholder': 'Por favor, digite o endereço do cliente',
  'page.route.configuration.host.placeholder': 'Por favor, digite o nome do host da solicitação HTTP',

  'page.route.service.none': 'Nenhum',

  'page.route.rule.create': 'Criar regra',
  'page.route.rule.edit': 'Configurar regra',

  'page.route.advanced-match.operator.sample.IN': 'Por favor, insira uma matriz, por exemplo ["1", "2"]',
  'page.route.advanced-match.operator.sample.~~': 'Por favor, insira uma expressão regular, por exemplo [a-z]+',
  'page.route.fields.service_id.invalid': 'Por favor, verifique a configuração do serviço de ligação',
  'page.route.fields.service_id.without-upstream':
    'Se você não vincular o serviço, você deve definir o Upstream (Etapa 2)',
  'page.route.advanced-match.tooltip':
    'Ele suporta correspondência de rotas por meio de cabeçalhos de solicitação, parâmetros de solicitação e cookies, e pode ser aplicado a cenários como publicação em escala de cinza e teste azul-verde.',
  'page.route.advanced-match.message': 'Dicas',
  'page.route.advanced-match.tips.requestParameter': 'Parâmetro de solicitação：Consulta do URL de solicitação',
  'page.route.advanced-match.tips.postRequestParameter':
    'Parâmetro de solicitação POST: Suporta apenas formulário x-www-form-urlencoded',
  'page.route.advanced-match.tips.builtinParameter':
    'Parâmetro interno: parâmetros internos do Nginx',

  'page.route.fields.custom.redirectOption.tooltip': 'Isto está relacionado ao plugin de redirecionamento',
  'page.route.fields.service_id.tooltip': 'Vincule o objeto Service para reutilizar sua configuração.',

  'page.route.fields.vars.invalid': 'Por favor, verifique a configuração de condição de correspondência avançada',
  'page.route.fields.vars.in.invalid':
    'Ao usar o operador IN, insira os valores dos parâmetros em formato de array.',
};
