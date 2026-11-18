export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  description: string;
  keywords: string[];
  iconName: 'pipe' | 'droplet' | 'toilet' | 'drain' | 'settings' | 'truck';
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  priceHint: string;
  faq: { q: string; a: string }[];
}

export const COMPANY_INFO = {
  name: 'HidroRibeirão',
  fullName: 'HidroRibeirão Saneamento e Desentupidora Ribeirão Preto 24h',
  domain: 'hidroribeirao.com',
  siteUrl: 'https://hidroribeirao.com',
  email: 'contato@hidroribeirao.com',
  tagline: 'Soluções em Saneamento, Hidrossanitária e Desentupimento para sua Tranquilidade',
  whatsappNumber: '5587981400403',
  yearsExperience: '24+',
  foundedYear: '2002',
  city: 'Ribeirão Preto',
  state: 'SP',
  address: 'Av. Pres. Vargas, 2121 - Jardim América, Ribeirão Preto - SP, 14020-260 (Atendimento Móvel em Toda a Cidade)',
  responseTime: '30 minutos',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: 'desentupidora-de-esgoto-ribeirao-preto',
    title: 'Desentupidora de Esgoto em Ribeirão Preto',
    shortTitle: 'Desentupimento de Esgoto',
    badge: 'Atendimento Emergencial 24h',
    metaTitle: 'Desentupidora de Esgoto em Ribeirão Preto 24h | Sem Quebrar Pisos',
    metaDescription:
      'Desentupidora de esgoto em Ribeirão Preto SP com atendimento 24 horas. Desobstrução de redes coletoras, ramais e tratamento de esgoto com garantia e visita grátis.',
    heroSubtitle:
      'Desobstrução completa de redes de esgoto residencial, comercial, condomínios e indústrias em Ribeirão Preto com sistema desagregador hidráulico e hidrojateamento.',
    description:
      'Problemas com retorno de esgoto, mau cheiro ou lentidão na tubulação exigem uma desentupidora de esgoto em Ribeirão Preto com maquinário pesado e precisão técnica. Removemos placas de gordura petrificada, raízes, detritos e incrustações sem quebrar pisos ou paredes.',
    keywords: [
      'desentupidora de esgoto em ribeirão preto',
      'desentupidora de esgoto ribeirão preto',
      'tratamento de esgoto ribeirão preto',
      'tratamento de esgoto de ribeirão preto',
      'saneamento basico em ribeirão preto',
    ],
    iconName: 'pipe',
    benefits: [
      'Execução 100% limpa sem quebrar pisos, lajes ou calçadas',
      'Equipamentos de vídeo inspeção e cabos espirais flexíveis de longo alcance',
      'Higienização da tubulação e prevenção contra novos entupimentos',
      'Garantia por escrito de até 1 ano e emissão de Nota Fiscal / Laudo Técnico',
    ],
    processSteps: [
      {
        title: '1. Diagnóstico e Localização Exata',
        desc: 'Identificamos o ponto exato de obstrução na caixa de inspeção ou tubulação mestre sem quebrar o imóvel.',
      },
      {
        title: '2. Desagregação Mecânica ou Hidrojateamento',
        desc: 'Aplicamos o sistema desagregador hidráulico ou jato de alta pressão para triturar e remover toda a obstrução.',
      },
      {
        title: '3. Teste de Vazão e Limpeza Final',
        desc: 'Testamos o fluxo completo até a rede pública de saneamento básico em Ribeirão Preto e entregamos o local limpo.',
      },
    ],
    priceHint: 'Visita Técnica e Orçamento 100% Gratuitos no local',
    faq: [
      {
        q: 'Vocês precisam quebrar o chão para desentupir a rede de esgoto?',
        a: 'Não! Em mais de 98% dos atendimentos como desentupidora de esgoto em Ribeirão Preto, utilizamos sondas rotativas e sistema desagregador hidráulico que entram pela própria caixa de inspeção ou ralo, preservando totalmente o seu piso.',
      },
      {
        q: 'Qual o tempo de chegada para urgência de esgoto voltando?',
        a: 'Mantemos equipes móveis posicionadas estrategicamente em Ribeirão Preto SP (Centro, Zona Sul, Anhanguera e Zona Leste), chegando em média de 25 a 40 minutos.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura-ribeirao-preto',
    title: 'Limpeza de Caixa de Gordura em Ribeirão Preto',
    shortTitle: 'Limpeza de Caixa de Gordura',
    badge: 'Residencial & Restaurantes',
    metaTitle: 'Limpeza de Caixa de Gordura Ribeirão Preto | Higienização e Sucção',
    metaDescription:
      'Serviço especializado de limpeza de caixa de gordura em Ribeirão Preto para residências, condomínios, bares e restaurantes. Evite mau cheiro, pragas e entupimentos.',
    heroSubtitle:
      'Remoção completa de gordura saponificada, raspagem técnica, hidrojateamento dos ramais de pia e descarte ecológico certificado em Estação de Tratamento de Esgoto de Ribeirão Preto.',
    description:
      'A limpeza de caixa de gordura em Ribeirão Preto é essencial para evitar que o excesso de óleo e detritos bloqueie a tubulação da cozinha, gere retorno de água suja ou atraia baratas e roedores. Atendemos desde casas até grandes cozinhas industriais e condomínios.',
    keywords: [
      'limpeza de caixa de gordura ribeirão preto',
      'desentupidora barata ribeirão preto',
      'estação de tratamento de esgoto de ribeirão preto',
      'desentupidora em ribeirão preto',
    ],
    iconName: 'droplet',
    benefits: [
      'Eliminação imediata do mau cheiro e retorno de espuma na pia da cozinha',
      'Sucção a vácuo ou limpeza mecânica com lavagem de alta pressão das paredes internas',
      'Desobstrução preventiva do cano que liga a pia à caixa de gordura',
      'Certificado de destinação correta em Estação de Tratamento de Esgoto de Ribeirão Preto',
    ],
    processSteps: [
      {
        title: '1. Esgotamento e Retirada da Crosta Sólida',
        desc: 'Removemos toda a camada de gordura endurecida e resíduos acumulados sem sujar sua área gourmet ou cozinha.',
      },
      {
        title: '2. Hidrojateamento das Paredes e Tubulação',
        desc: 'Lavamos o interior da caixa e o ramal da pia para restabelecer 100% do diâmetro original do cano.',
      },
      {
        title: '3. Transporte e Tratamento de Esgoto',
        desc: 'Todo resíduo coletado segue rigorosamente para tratamento de esgoto em Ribeirão Preto conforme normas da CETESB.',
      },
    ],
    priceHint: 'Planos avulsos e contratos preventivos para restaurantes e condomínios',
    faq: [
      {
        q: 'De quanto em quanto tempo devo fazer a limpeza de caixa de gordura em Ribeirão Preto?',
        a: 'Para residências, recomendamos a cada 6 meses. Para restaurantes, padarias, lanchonetes e condomínios em Ribeirão Preto, o ideal é a manutenção mensal ou trimestral.',
      },
      {
        q: 'Vocês emitem laudo para Vigilância Sanitária?',
        a: 'Sim! Fornecemos nota fiscal, certificado de limpeza e comprovante de descarte em estação de tratamento de esgoto de Ribeirão Preto.',
      },
    ],
  },
  {
    slug: 'desentupidora-de-vaso-sanitario-ribeirao-preto',
    title: 'Desentupidora de Vaso Sanitário em Ribeirão Preto',
    shortTitle: 'Desentupimento de Vaso Sanitário',
    badge: 'Rápido e Sem Sujeira',
    metaTitle: 'Desentupidora de Vaso Sanitário Ribeirão Preto 24h | Atendimento Imediato',
    metaDescription:
      'Vaso sanitário entupido? Desentupidora de vaso sanitário em Ribeirão Preto 24 horas. Desentupimento rápido sem danificar a louça sanitária e com preço justo.',
    heroSubtitle:
      'Resolvemos entupimentos em vasos sanitários convencionais, com caixa acoplada ou válvula Hydra em poucos minutos, sem riscar a porcelana e sem sujeira no banheiro.',
    description:
      'Quando o vaso sanitário entope, a situação exige rapidez absoluta. Nossa equipe de desentupidora de vaso sanitário em Ribeirão Preto utiliza equipamentos pneumáticos e sondas revestidas que removem papel, objetos acidentais e obstruções profundas no ramal de 4 polegadas.',
    keywords: [
      'desentupidora de vaso sanitário ribeirão preto',
      'desentupidora 24 horas ribeirão preto',
      'desentupidora ribeirão preto 24h',
      'desentupidora barata ribeirão preto',
    ],
    iconName: 'toilet',
    benefits: [
      'Sondas com proteção especial que não riscam nem trincam a louça sanitária',
      'Atendimento ultra rápido 24 horas, inclusive domingos e feriados',
      'Remoção de objetos caídos acidentalmente (suporte de sabonete, brinquedos, absorventes)',
      'Desinfecção e teste completo de descarga na presença do cliente',
    ],
    processSteps: [
      {
        title: '1. Avaliação do Sifão ou Ramal Principal',
        desc: 'Verificamos se o bloqueio está na curva interna da bacia sanitária ou na tubulação de saída de 100mm.',
      },
      {
        title: '2. Desobstrução com Sonda Rotativa Protegida',
        desc: 'Extraímos ou trituramos o agente causador do entupimento sem precisar quebrar o piso do banheiro.',
      },
      {
        title: '3. Teste de Pressão de Descarga',
        desc: 'Realizamos múltiplos testes de vazão para garantir que a água desça com força total.',
      },
    ],
    priceHint: 'Orçamento justo e acessível antes de iniciar o serviço',
    faq: [
      {
        q: 'Jogar soda cáustica ou água fervendo ajuda a desentupir o vaso?',
        a: 'Nunca utilize soda cáustica ou água fervente! A soda petrifica dentro do cano de PVC e a água fervendo pode trincar a porcelana do vaso e derreter o anel de vedação.',
      },
    ],
  },
  {
    slug: 'desentupidora-de-ralo-ribeirao-preto',
    title: 'Desentupidora de Ralo e Pias em Ribeirão Preto',
    shortTitle: 'Desentupimento de Ralo e Pia',
    badge: 'Banheiro, Quintal e Pluvial',
    metaTitle: 'Desentupidora de Ralo Ribeirão Preto | Ralos de Chuveiro, Quintal e Pias',
    metaDescription:
      'Desentupidora de ralo em Ribeirão Preto 24h. Desobstrução de ralos de banheiro, box, quintal, águas pluviais, calhas e pias de cozinha sem quebrar pisos.',
    heroSubtitle:
      'Elimine o acúmulo de água no box do banheiro, área de serviço, varanda gourmet ou quintal com tecnologia rotativa que remove cabelos, sabão empedrado, folhas e terra.',
    description:
      'Água subindo pelo ralo durante o banho ou quintal alagando em dias de chuva em Ribeirão Preto são sinais claros de obstrução nos ramais secundários ou na rede pluvial. Como desentupidora de ralo em Ribeirão Preto, limpamos desde tubulações finas de 40mm até galerias pluviais.',
    keywords: [
      'desentupidora de ralo ribeirão preto',
      'desentupidora em ribeirão preto sp',
      'desentupidora ribeirão preto',
      'empresa de desentupimento ribeirão preto',
    ],
    iconName: 'drain',
    benefits: [
      'Remoção integral de tufos de cabelo, restos de sabonete, cimento de obra e raízes',
      'Desobstrução de ralos sifonados, lineares e grelhas de garagem/quintal',
      'Prevenção contra infiltrações no andar inferior de apartamentos e sobrados',
      'Atendimento imediato para residências, salões de beleza, academias e condomínios',
    ],
    processSteps: [
      {
        title: '1. Inspeção da Caixa Sifonada e Ramais',
        desc: 'Mapeamos o caminho da tubulação do ralo até a coluna principal ou saída pluvial.',
      },
      {
        title: '2. Raspagem Interna com Cabos Flexíveis',
        desc: 'Nossa máquina rotativa percorre todas as curvas de 45° e 90° raspando as paredes internas do cano.',
      },
      {
        title: '3. Higienização e Fluxo Livre',
        desc: 'Deixamos o escoamento imediato, evitando água parada e proliferação de insetos.',
      },
    ],
    priceHint: 'Condições especiais para desentupimento de múltiplos ralos no mesmo imóvel',
    faq: [
      {
        q: 'Vocês desentopem ralo de quintal entupido por folhas e terra de chuva?',
        a: 'Sim! Em Ribeirão Preto as chuvas fortes costumam levar terra, folhas e pedras para a rede pluvial. Fazemos a raspagem mecânica e o hidrojateamento da tubulação pluvial.',
      },
    ],
  },
  {
    slug: 'hidrossanitaria-e-sistema-desagregador-ribeirao-preto',
    title: 'Hidrossanitária e Sistema Desagregador Hidráulico em Ribeirão Preto',
    shortTitle: 'Engenharia Hidrossanitária & Desagregador',
    badge: 'Tecnologia de Ponta',
    metaTitle: 'Hidrossanitária Ribeirão Preto e Sistema Desagregador Hidráulico',
    metaDescription:
      'Soluções avançadas em hidrossanitária em Ribeirão Preto com sistema desagregador hidráulico, vídeo inspeção e manutenção de redes de saneamento básico.',
    heroSubtitle:
      'Tecnologia industrial e predial para manutenção hidrossanitária em Ribeirão Preto: desobstrução por sistema desagregador hidráulico sem impacto estrutural na tubulação.',
    description:
      'Para condomínios, hospitais, indústrias, shoppings e residências de alto padrão, oferecemos engenharia hidrossanitária em Ribeirão Preto aliada ao moderno sistema desagregador hidráulico — uma tecnologia que desfaz incrustações severas de calcário, gordura e cimento através de ação hidromecânica controlada.',
    keywords: [
      'hidrossanitária ribeirão preto',
      'sistema desagregador hidráulico ribeirão preto',
      'saneamento basico em ribeirão preto',
      'empresa de desentupimento ribeirão preto',
    ],
    iconName: 'settings',
    benefits: [
      'Sistema Desagregador Hidráulico que restaura o diâmetro original da tubulação sem danificar conexões',
      'Diagnóstico preciso de patologias na rede hidrossanitária predial e industrial',
      'Manutenção preventiva e corretiva em colunas de queda, barriletes e caixas coletoras',
      'Equipe técnica treinada nas normas ABNT NBR 8160 (Sistemas Prediais de Esgoto Sanitário)',
    ],
    processSteps: [
      {
        title: '1. Vistoria Técnica Hidrossanitária',
        desc: 'Avaliamos plantas, caixas de passagem, declividade e pontos críticos de estrangulamento hidráulico.',
      },
      {
        title: '2. Aplicação do Sistema Desagregador Hidráulico',
        desc: 'Utilizamos bicos rotativos hidrodinâmicos que desagregam placas sólidas com precisão milimétrica.',
      },
      {
        title: '3. Relatório Técnico e Manutenção Preventiva',
        desc: 'Entregamos parecer técnico detalhado para síndicos, engenheiros e gestores de manutenção em Ribeirão Preto.',
      },
    ],
    priceHint: 'Atendimento especializado para residências, condomínios e indústrias',
    faq: [
      {
        q: 'O que é o sistema desagregador hidráulico em Ribeirão Preto?',
        a: 'É uma tecnologia de desobstrução que combina força hidráulica controlada e cabeçotes rotativos especiais para desagregar blocos sólidos (gordura petrificada, raízes, restos de argamassa) dentro da tubulação sem agredir o PVC, ferro fundido ou manilha cerâmica.',
      },
    ],
  },
  {
    slug: 'limpeza-de-fossa-e-tratamento-de-esgoto-ribeirao-preto',
    title: 'Limpeza de Fossa e Tratamento de Esgoto em Ribeirão Preto',
    shortTitle: 'Limpeza de Fossa & Tratamento de Esgoto',
    badge: 'Frota Auto Vácuo Licenciada',
    metaTitle: 'Limpeza de Fossa e Tratamento de Esgoto Ribeirão Preto | Auto Vácuo 24h',
    metaDescription:
      'Caminhão limpa fossa e encaminhamento para estação de tratamento de esgoto de Ribeirão Preto. Esgotamento de fossas sépticas, negras, sumidouros e caixas.',
    heroSubtitle:
      'Frota própria de caminhões combinados Auto Vácuo e Hidrojateamento com destinação 100% legalizada em Estação de Tratamento de Esgoto de Ribeirão Preto.',
    description:
      'Realizamos o esgotamento técnico de fossas sépticas, fossas negras, sumidouros, caixas de decantação e inundações em chácaras, condomínios, indústrias e comércios. Nosso compromisso com o saneamento básico em Ribeirão Preto garante que todo efluente coletado seja transportado com segurança até uma estação de tratamento de esgoto de Ribeirão Preto credenciada.',
    keywords: [
      'estação de tratamento de esgoto de ribeirão preto',
      'estação de tratamento de esgoto ribeirão preto',
      'tratamento de esgoto de ribeirão preto',
      'tratamento de esgoto ribeirão preto',
      'saneamento basico em ribeirão preto',
    ],
    iconName: 'truck',
    benefits: [
      'Caminhões de alto poder de sucção a vácuo com mangueiras longas para locais de difícil acesso',
      'Destinação exclusiva em Estação de Tratamento de Esgoto de Ribeirão Preto (CADRI / Manifesto de Transporte)',
      'Limpeza complementar com hidrojateamento para reativar a drenagem do sumidouro',
      'Conformidade total com órgãos ambientais (CETESB, DAERP/Ambiental e Vigilância Sanitária)',
    ],
    processSteps: [
      {
        title: '1. Posicionamento e Sucção a Alto Vácuo',
        desc: 'Acoplamos mangotes vedados que aspiram lodo, detritos e efluentes sem espalhar odor no imóvel.',
      },
      {
        title: '2. Lavagem Técnica Interna',
        desc: 'Removemos o lodo compactado no fundo da fossa séptica ou caixa separadora.',
      },
      {
        title: '3. Descarte em Estação de Tratamento de Esgoto',
        desc: 'O efluente é descarregado exclusivamente em Estação de Tratamento de Esgoto de Ribeirão Preto autorizada.',
      },
    ],
    priceHint: 'Orçamento sob medida por metragem cúbica ou viagem fechada',
    faq: [
      {
        q: 'Para onde vai o resíduo coletado pelo caminhão limpa fossa?',
        a: 'Todo o efluente é transportado em tanque hermético diretamente para uma Estação de Tratamento de Esgoto de Ribeirão Preto devidamente licenciada, contribuindo para o saneamento básico em Ribeirão Preto e emitindo comprovante legal ao cliente.',
      },
    ],
  },
];

export const NEIGHBORHOODS_RIBEIRAO = [
  { region: 'Zona Sul & Nova Aliança', list: ['Ribeirânia', 'Nova Aliança', 'Jardim Botânico', 'Jardim Irajá', 'Jardim Califórnia', 'City Ribeirão', 'Bonfim Paulista', 'Alto da Boa Vista', 'Fiúsa'] },
  { region: 'Centro & Tradicionais', list: ['Centro', 'Vila Tibério', 'Campos Elíseos', 'Sumarezinho', 'Jardim Sumaré', 'Vila Seixas', 'Higienópolis', 'Boulevard'] },
  { region: 'Eixo Anhanguera & Zona Leste', list: ['Parque Industrial Anhanguera', 'Novo Mundo', 'Castelo Branco', 'Jardim Paulista', 'Jardim Paulistano', 'Lagoinha', 'Ribeirão Verde'] },
  { region: 'Zona Norte & Oeste', list: ['Ipiranga', 'Planalto Verde', 'Quintino Facci', 'Adelino Simioni', 'Presidente Dutra', 'Jardim Aeroporto', 'Dom Mielle'] },
];

export const HOME_FAQS = [
  {
    q: 'Qual o valor cobrado por uma desentupidora em Ribeirão Preto?',
    a: 'Como prezamos por ser uma desentupidora em Ribeirão Preto transparente e com preço justo (ótimo custo-benefício), enviamos um técnico até o seu local gratuitamente para avaliar o ponto de obstrução. Você recebe o orçamento fechado antes da execução, sem taxas surpresa e com facilidade de pagamento no PIX ou cartão.',
  },
  {
    q: 'A desentupidora atende 24 horas em Ribeirão Preto SP, inclusive domingos e feriados?',
    a: 'Sim! Somos uma desentupidora 24 horas em Ribeirão Preto (plantão 24h real, 7 dias por semana). Seja de madrugada, fim de semana ou feriado, temos equipes de prontidão no Centro, Zona Sul e eixo Anhanguera para atendimento ultra rápido via WhatsApp.',
  },
  {
    q: 'Vocês quebram pisos ou paredes para desentupir esgoto, ralo ou vaso sanitário?',
    a: 'Não! Utilizamos tecnologia moderna de cabos flexíveis rotativos, sistema desagregador hidráulico e hidrojateamento que percorrem as curvas da tubulação internamente, desobstruindo canos de esgoto, pias, ralos e vasos sanitários sem quebrar absolutamente nada.',
  },
  {
    q: 'Como funciona o descarte na limpeza de caixa de gordura e fossa em Ribeirão Preto?',
    a: 'Seguimos todas as diretrizes de saneamento básico em Ribeirão Preto. Os resíduos coletados em limpezas de fossa e caixa de gordura são transportados por caminhões auto vácuo licenciados até uma estação de tratamento de esgoto de Ribeirão Preto credenciada, com emissão de nota fiscal e certificado ambiental.',
  },
  {
    q: 'Qual a diferença entre o desentupimento comum e o Sistema Desagregador Hidráulico?',
    a: 'Enquanto métodos caseiros apenas furam o bloqueio temporariamente, nossa solução hidrossanitária em Ribeirão Preto com sistema desagregador hidráulico tritura e remove 100% das placas de gordura, raízes e detritos incrustados nas paredes do tubo, garantindo que o entupimento não volte.',
  },
  {
    q: 'Vocês oferecem garantia em todos os serviços de desentupimento?',
    a: 'Sim! Todos os serviços realizados pela nossa empresa de desentupimento em Ribeirão Preto possuem garantia por escrito de 90 dias a 1 ano (conforme o tipo de rede), além de nota fiscal e recibo detalhado.',
  },
];
