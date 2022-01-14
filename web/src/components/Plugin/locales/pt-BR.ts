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
  'component.plugin.tip1': 'OBSERVAÇÃO: Depois de personalizar o plug-in, você precisa atualizar o schema.json.',
  'component.plugin.tip2': 'Como atualizar?',
  'component.select.pluginTemplate': 'Selecione um modelo de plug-in',
  'component.step.select.pluginTemplate.select.option': 'Personalizado',
  'component.plugin.pluginTemplate.tip1':
    '1. Quando uma rota já tem um campo de plugins configurado, os plugins no template de plugin serão mesclados nele.',
  'component.plugin.pluginTemplate.tip2':
    '2. O mesmo plug-in no modelo de plug-in substituirá um dos plug-ins.',
  'component.plugin.enable': 'Ativar',
  'component.plugin.disable': 'Editar',
  'component.plugin.authentication': 'Autenticação',
  'component.plugin.security': 'Segurança',
  'component.plugin.traffic': 'Controle de tráfego',
  'component.plugin.serverless': 'Sem servidor',
  'component.plugin.observability': 'Observabilidade',
  'component.plugin.other': 'Outro',

  // cors
  'component.pluginForm.cors.allow_origins.tooltip':
    'Qual Origens tem permissão para habilitar CORS, formato como：scheme://host:port, por exemplo: https://somehost.com:8081. Uso de origem múltipla , para dividir. Quando allow_credential for false, você pode usar * para indicar permitir qualquer origem. você também pode permitir todas as origens com força usando ** mesmo já habilitar allow_credential, mas isso trará alguns riscos de segurança.',
  'component.pluginForm.cors.allow_origins.extra': 'Por exemplo: https://somehost.com:8081',
  'component.pluginForm.cors.allow_methods.tooltip':
    'Qual método tem permissão para habilitar CORS, como: GET, POST etc. Uso de vários métodos, para dividir. Quando allow_credential for false, você pode usar * para indicar permitir todos os métodos. Você também pode permitir qualquer método com força usando ** mesmo já habilitar allow_credential, mas trará alguns riscos de segurança.',
  'component.pluginForm.cors.allow_headers.tooltip':
    'Quais cabeçalhos podem ser definidos na solicitação ao acessar o recurso de origem cruzada. Valor múltiplo use , para dividir. Quando allow_credential for false, você pode usar * para indicar permitir todos os cabeçalhos de solicitação. Você também pode permitir qualquer cabeçalho com força usando ** mesmo já habilitar allow_credential, mas isso trará alguns riscos de segurança.',
  'component.pluginForm.cors.expose_headers.tooltip':
    'Quais cabeçalhos podem ser definidos em resposta ao acessar o recurso de origem cruzada. Valor múltiplo use , para dividir. Quando allow_credential for false, você pode usar * para indicar permitir qualquer cabeçalho. Você também pode permitir qualquer cabeçalho com força usando ** mesmo já habilitar allow_credential, mas isso trará alguns riscos de segurança.',
  'component.pluginForm.cors.max_age.tooltip':
    'Número máximo de segundos que os resultados podem ser armazenados em cache. Dentro desse intervalo de tempo, o navegador reutilizará o último resultado da verificação. -1 significa sem cache. Observe que o valor máximo depende do navegador, consulte o MDN para obter detalhes.',
  'component.pluginForm.cors.allow_credential.tooltip':
    "Se você definir esta opção como verdadeira, não poderá usar '*' para outras opções.",
  'component.pluginForm.cors.allow_origins_by_regex.tooltip':
    'Use expressões regex para corresponder qual origem tem permissão para habilitar CORS, por exemplo, [".*.test.com"] pode usar para corresponder a todos os subdomínios de test.com.',

  //restrição de referência
  'component.pluginForm.referer-restriction.whitelist.tooltip':
    'Lista de hostname para whitelist. O nome do host pode ser iniciado com * como curinga.',
  'component.pluginForm.referer-restriction.blacklist.tooltip':
    'Lista de hostname para lista negra. O nome do host pode ser iniciado com * como curinga.',
  'component.pluginForm.referer-restriction.listEmpty.tooltip': 'Lista vazia',
  'component.pluginForm.referer-restriction.bypass_missing.tooltip':
    'Se ignorar a verificação quando o cabeçalho do Referer estiver ausente ou malformado.',
  'component.pluginForm.referer-restriction.message.tooltip':
    'Mensagem retornada caso o acesso não seja permitido.',

  // quebra de API
  'component.pluginForm.api-breaker.break_response_code.tooltip':
    'Retornar código de erro quando não estiver saudável.',
  'component.pluginForm.api-breaker.max_breaker_sec.tooltip': 'Tempo máximo do disjuntor (segundos).',
  'component.pluginForm.api-breaker.unhealthy.http_statuses.tooltip':
    'Códigos de status quando não saudável.',
  'component.pluginForm.api-breaker.unhealthy.failures.tooltip':
    'Número de solicitações de erro consecutivas que acionaram um estado não íntegro.',
  'component.pluginForm.api-breaker.healthy.http_statuses.tooltip': 'Códigos de status quando íntegro.',
  'component.pluginForm.api-breaker.healthy.successes.tooltip':
    'Número de solicitações normais consecutivas que acionam o status de integridade.',

  // espelho-proxy
   'component.pluginForm.proxy-mirror.host.tooltip':
     'Especifique um endereço de serviço espelho, por exemplo http://127.0.0.1:9797 (o endereço precisa conter o esquema: http ou https, não parte do URI)',
   'component.pluginForm.proxy-mirror.host.extra': 'ex. http://127.0.0.1:9797',
   'component.pluginForm.proxy-mirror.host.ruletip':
     'endereço precisa conter esquema: http ou https, não parte URI',
   'component.pluginForm.proxy-mirror.sample_ratio.tooltip':
     'a proporção da amostra que as solicitações serão espelhadas.',

  //limit-conn
  'component.pluginForm.limit-conn.conn.tooltip':
  'o número de solicitações simultâneas permitidas. As solicitações que excederem essa proporção (e abaixo de conn + burst) serão atrasadas (segundas são configuradas por default_conn_delay) para estar em conformidade com esse limite',
  'component.pluginForm.limit-conn.burst.tooltip':
  'o número de solicitações (ou simultaneamente) simultâneas que podem ser atrasadas.',
  'component.pluginForm.limit-conn.default_conn_delay.tooltip':
  'os segundos de latência da solicitação quando as solicitações contínuas excedem conn, mas abaixo (conn + burst).',
  'component.pluginForm.limit-conn.key_type.tooltip':
  'O tipo de chave, suporte: "var" (single var) e "var_combination" (combine var)',
  'component.pluginForm.limit-conn.key.tooltip':
    'para limitar o nível de simultaneidade. Por exemplo, pode-se usar o nome do host (ou zona do servidor) como a chave para limitar a simultaneidade por nome do host. Caso contrário, também podemos usar o endereço do cliente como chave para evitar que um único cliente inunde nosso serviço com muitas conexões ou solicitações paralelas.',
  'component.pluginForm.limit-conn.rejected_code.tooltip':
    'retornado quando o pedido exceder conn + burst será rejeitado.',
  'component.pluginForm.limit-conn.rejected_msg.tooltip':
    'o corpo da resposta retornado quando a solicitação exceder conn + burst será rejeitado.',
  'component.pluginForm.limit-conn.only_use_default_delay.tooltip':
    'habilita o modo estrito dos segundos de latência. Se você definir esta opção como verdadeira, ela será executada estritamente de acordo com os segundos de latência que você definiu sem lógica de cálculo adicional.',
  'component.pluginForm.limit-conn.allow_degradation.tooltip':
    'Se habilitar a degradação do plugin quando a função limit-conn estiver temporariamente indisponível. Permitir que as solicitações continuem quando o valor for definido como verdadeiro, padrão falso.',

  // limite-req
  'component.pluginForm.limit-req.rate.tooltip':
    'O limite da taxa de solicitação especificada (número por segundo). As solicitações que excederem essa taxa (e abaixo da rajada) serão atrasadas para se adequarem à taxa.',
  'component.pluginForm.limit-req.burst.tooltip':
    'O número de solicitações excessivas por segundo permitidas para serem atrasadas. As solicitações que excederem esse limite rígido serão rejeitadas imediatamente.',
  'component.pluginForm.limit-req.key_type.tooltip':
    'O tipo de chave, suporte: "var" (single var) e "var_combination" (combine var)',
  'component.pluginForm.limit-req.key.tooltip': 'A chave especificada pelo usuário para limitar a taxa.',
  'component.pluginForm.limit-req.rejected_code.tooltip':
    'O código de status HTTP retornado quando a solicitação excede o limite é rejeitado.',
  'component.pluginForm.limit-req.nodelay.tooltip':
    'Se o sinalizador nodelay for verdadeiro, as solicitações em rajada não serão atrasadas',

  'component.plugin.form': 'Formulário',
  'component.plugin.format-codes.disable': 'Formatar dados JSON ou YAML',
  'component.plugin.editor': 'Editor de plugins',
  'component.plugin.noConfigurationRequired': "Não precisa de configuração",

  // limite de contagem
  'component.pluginForm.limit-count.count.tooltip': 'O número especificado de limite de solicitações.',
  'component.pluginForm.limit-count.time_window.tooltip':
    'A janela de tempo em segundos antes que a contagem de solicitações seja redefinida.',
  'component.pluginForm.limit-count.key_type.tooltip':
    'O tipo de chave, suporte: "var" (single var) e "var_combination" (combine var)',
  'component.pluginForm.limit-count.key.tooltip': 'A chave especificada pelo usuário para limitar a contagem.',
  'component.pluginForm.limit-count.rejected_code.tooltip':
    'O código de status HTTP retornado quando a solicitação excede o limite é rejeitado, padrão 503.',
  'component.pluginForm.limit-count.policy.tooltip':
    'As políticas de limitação de taxa a serem usadas para recuperar e incrementar os limites. Os valores disponíveis são locais (os contadores serão armazenados localmente na memória do nó) e redis (os contadores são armazenados em um servidor Redis e serão compartilhados entre os nós, geralmente usados ​​para fazer o limite de velocidade global) e redis-cluster (a mesma função que redis, use apenas o padrão de cluster Redis).',
  'component.pluginForm.limit-count.redis_host.tooltip':
    'Ao usar a política redis, esta propriedade especifica o endereço do servidor Redis.',
  'component.pluginForm.limit-count.redis_port.tooltip':
    'Ao usar a política redis, esta propriedade especifica a porta do servidor Redis.',
  'component.pluginForm.limit-count.redis_password.tooltip':
    'Ao usar a política redis, esta propriedade especifica a senha do servidor Redis.',
  'component.pluginForm.limit-count.redis_database.tooltip':
    'Ao usar a política redis, esta propriedade especifica o banco de dados selecionado do servidor Redis e apenas para o modo de cluster não Redis (modo de instância única ou serviço de nuvem pública Redis que fornece entrada única).',
  'component.pluginForm.limit-count.redis_timeout.tooltip':
    'Ao usar a política redis, esta propriedade especifica o tempo limite em milissegundos de qualquer comando enviado ao servidor Redis.',
  'component.pluginForm.limit-count.redis_cluster_nodes.tooltip':
    'Ao usar a política redis-cluster, esta propriedade é uma lista de endereços de nós de serviço de cluster Redis (pelo menos dois nós).',
  'component.pluginForm.limit-count.redis_cluster_name.tooltip':
    'Ao usar a política redis-cluster, esta propriedade é o nome dos nós de serviço de cluster Redis.',
  'component.pluginForm.limit-count.atLeast2Characters.rule': 'Por favor, insira pelo menos 2 caracteres',
};
