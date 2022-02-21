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
  'page.upstream.step.select.upstream': 'Selecione Upstream',
  'page.upstream.step.select.upstream.select.option': 'Personalizado',
  'page.upstream.step.select.upstream.select.none': 'Nenhum',
  'page.upstream.step.backend.server.domain.or.ip': 'Host/IP do servidor de backend',
  'page.upstream.form.item-label.node.domain.or.ip': 'Destinos',
  'page.upstream.step.input.domain.name.or.ip': 'Por favor, insira o domínio ou IP',
  'page.upstream.step.valid.domain.name.or.ip': 'Por favor, insira um domínio ou IP válido',
  'page.upstream.step.domain.name.or.ip': 'Hostname ou IP',
  'page.upstream.step.host': 'Host',
  'page.upstream.step.input.port': 'Por favor, digite o número da porta',
  'page.upstream.step.port': 'Porta',
  'page.upstream.step.input.weight': 'Por favor, insira o peso',
  'page.upstream.step.weight': 'Peso',
  'page.upstream.step.create': 'Criar',
  'page.upstream.step.name': 'Nome',
  'page.upstream.step.name.should.unique': 'O nome deve ser exclusivo',
  'page.upstream.step.input.upstream.name': 'Por favor, digite o nome do upstream',
  'page.upstream.step.description': 'Descrição',
  'page.upstream.step.input.description': "Por favor, insira a descrição do upstream",
  'page.upstream.step.type': 'Algoritmo',
  'page.upstream.step.pass-host': 'Nome do host',
  'page.upstream.step.pass-host.pass': 'Manter o mesmo host da solicitação do cliente',
  'page.upstream.step.pass-host.node': 'Use o domínio ou IP da lista de nós',
  'page.upstream.step.pass-host.rewrite': 'Host personalizado (será obsoleto no futuro)',
  'page.upstream.step.pass-host.upstream_host': 'Host personalizado',
  'page.upstream.step.connect.timeout': 'Tempo limite de conexão',
  'page.upstream.step.connect.timeout.desc':
    'Tempo limite para estabelecer uma conexão da solicitação ao servidor upstream',
  'page.upstream.step.input.connect.timeout': 'Por favor, insira o tempo limite de conexão',
  'page.upstream.step.send.timeout': 'Enviar tempo limite',
  'page.upstream.step.send.timeout.desc': 'Tempo limite para envio de dados para servidores upstream',
  'page.upstream.step.input.send.timeout': 'Por favor, insira o tempo limite de envio',
  'page.upstream.step.read.timeout': 'Tempo limite de leitura',
  'page.upstream.step.read.timeout.desc': 'Tempo limite para receber dados de servidores upstream',
  'page.upstream.step.input.read.timeout': 'Por favor, digite o tempo limite de leitura',
  'page.upstream.step.healthyCheck.healthy.check': 'Verificação de integridade',
  'page.upstream.step.healthyCheck.healthy': 'Saudável',
  'page.upstream.step.healthyCheck.unhealthy': 'Insalubre',
  'page.upstream.step.healthyCheck.healthy.status': 'Status saudável',
  'page.upstream.step.healthyCheck.unhealthyStatus': 'Status insalubre',
  'page.upstream.step.healthyCheck.active': 'Ativo',
  'page.upstream.step.healthyCheck.active.timeout': 'Tempo limite',
  'page.upstream.step.input.healthyCheck.active.timeout': 'Por favor, insira o tempo limite',
  'page.upstream.step.input.healthyCheck.activeInterval': 'Por favor, insira o intervalo',
  'page.upstream.step.input.healthyCheck.active.req_headers': 'Por favor, insira os cabeçalhos da solicitação',
  'page.upstream.step.healthyCheck.passive': 'Passivo',
  'page.upstream.step.healthyCheck.passive.http_statuses': 'Status HTTP',
  'page.upstream.step.input.healthyCheck.passive.http_statuses': 'Por favor, insira o status http',
  'page.upstream.step.healthyCheck.passive.tcp_failures': 'Falhas TCP',
  'page.upstream.step.input.healthyCheck.passive.tcp_failures': 'Por favor, insira falhas de TCP',
  'page.upstream.step.keepalive_pool': 'Keepalive Pool',
  'page.upstream.notificationMessage.enableHealthCheckFirst': 'Ative a verificação de integridade primeiro.',
  'page.upstream.upstream_host.required': 'Por favor, insira o Host personalizado',

  'page.upstream.create': 'Criar upstream',
  'page.upstream.configure': 'Configurar upstream',
  'page.upstream.create.upstream.successfully': 'Criar upstream com sucesso',
  'page.upstream.edit.upstream.successfully': 'Configurar upstream com sucesso',
  'page.upstream.create.basic.info': 'Informações básicas',
  'page.upstream.create.preview': 'Visualização',

  'page.upstream.list.name': 'Nome',
  'page.upstream.list.type': 'Tipo',
  'page.upstream.list.description': 'Descrição',
  'page.upstream.list.edit.time': 'Hora de atualização',
  'page.upstream.list.operation': 'Operação',
  'page.upstream.list.edit': 'Configurar',
  'page.upstream.list.confirm.delete': 'Tem certeza de que deseja excluir ?',
  'page.upstream.list.confirm': 'Confirmar',
  'page.upstream.list.cancel': 'Cancelar',
  'page.upstream.list.delete.successfully': 'Excluir upstream com sucesso',
  'page.upstream.list.delete': 'Excluir',
  'page.upstream.list': 'Lista upstream',
  'page.upstream.list.input': 'Por favor, digite',
  'page.upstream.list.create': 'Criar',

  'page.upstream.type.roundrobin': 'Round Robin',
  'page.upstream.type.chash': 'CHAsh',
  'page.upstream.type.ewma': 'EWMA',
  'page.upstream.type.least_conn': 'Menor conexão',

  'page.upstream.list.content':
    'A lista upstream contém os serviços upstream criados (ou seja, serviços de back-end) e permite balanceamento de carga e verificação de integridade de vários nós de destino dos serviços upstream.',

  'page.upstream.checks.active.timeout.description':
    'Tempo limite de soquete para verificações ativas (em segundos)',
  'page.upstream.checks.active.unhealthy.interval.description':
    'Intervalo entre verificações de alvos não saudáveis (em segundos)',
  'page.upstream.checks.passive.healthy.http_statuses.description':
    'Quais status HTTP considerar um sucesso',
  'page.upstream.checks.passive.unhealthy.http_statuses.description':
    'Quais status HTTP considerar uma falha',
  'page.upstream.checks.passive.unhealthy.http_failures.description':
    'Número de falhas HTTP para considerar um destino não íntegro',
  'page.upstream.checks.passive.unhealthy.tcp_failures.description':
    'Número de falhas de TCP para considerar um destino não íntegro',
  'page.upstream.scheme': 'Esquema',

  'page.upstream.other.configuration.invalid': 'Por favor, verifique a configuração Upstream',
};
