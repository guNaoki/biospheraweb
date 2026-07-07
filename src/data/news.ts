export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: 'sinalizacao-bioquimica',
    title: 'Sinalização bioquímica é aposta do Mentor para soja mais produtiva',
    date: '19 de junho de 2026',
    category: 'Inovações Biológicas',
    summary: 'A utilização de biomoléculas sinalizadoras surge como uma poderosa ferramenta para otimizar processos fisiológicos e elevar o teto produtivo da cultura da soja.',
    content: 'O manejo de lavouras de alta produtividade exige ferramentas inovadoras. A sinalização bioquímica, estimulada por meio de indutores biológicos, permite que a planta ative rotas metabólicas de defesa e crescimento de forma preventiva. O Mentor, nova tecnologia da Biosphera, foca exatamente na ativação desses mecanismos, proporcionando melhor aproveitamento de nutrientes e tolerância a estresses climáticos.'
  },
  {
    id: 'nematoides-sistema-produtivo',
    title: 'Nematoides no sistema produtivo: mapeamento Biosphera e estratégia com BPCPs',
    date: '16 de fevereiro de 2026',
    category: 'Mapeamento & Manejo',
    summary: 'Entenda os impactos das principais espécies de nematoides no solo e como as Bactérias Promotoras de Crescimento de Plantas auxiliam no controle biológico.',
    content: 'Os nematoides representam um dos maiores gargalos da agricultura moderna, reduzindo a absorção de água e nutrientes pelas raízes. O mapeamento sistemático realizado pela Biosphera nas principais regiões produtoras aponta que o consórcio de microrganismos benéficos (BPCPs) protege o sistema radicular, criando uma barreira física e biológica que reduz a penetração desses fitopatógenos.'
  },
  {
    id: 'agricultura-resiliente',
    title: 'Agricultura resiliente: microrganismos que fortalecem a produtividade',
    date: '4 de fevereiro de 2026',
    category: 'Agricultura Resiliente',
    summary: 'Como a associação benéfica entre plantas e microrganismos atua na mitigação de estresses hídricos e térmicos no campo, garantindo estabilidade produtiva.',
    content: 'Com as mudanças climáticas e a ocorrência frequente de veranicos, a agricultura resiliente tornou-se prioridade. Bactérias promotoras de crescimento, como as do gênero Bacillus e Bradyrhizobium, produzem exopolissacarídeos e osmoprotetores que mantêm a umidade radicular e ajudam a planta a manter as taxas fotossintéticas mesmo sob estresse térmico.'
  },
  {
    id: 'biosfera-o-que-e',
    title: 'Biosfera: o que é, como funciona e por que é essencial para a vida e para a agricultura',
    date: '16 de janeiro de 2026',
    category: 'Conhecimento',
    summary: 'Entenda os ciclos biogeoquímicos que regem o solo e a atmosfera, e como o manejo biológico preserva o equilíbrio microbiológico essencial à vida vegetal.',
    content: 'A biosfera engloba todos os ecossistemas vivos da Terra. No solo, esta teia biológica é responsável pela reciclagem de nutrientes e pela disponibilização de minerais como fósforo e nitrogênio. Adotar práticas agrícolas sustentáveis e bioinsumos preserva a integridade deste ecossistema, garantindo solos férteis para as próximas gerações.'
  },
  {
    id: 'protetores-bacterianos-inoculacao',
    title: 'Protetores bacterianos são essenciais para o sucesso da inoculação na soja',
    date: '13 de outubro de 2025',
    category: 'Manejo Técnico',
    summary: 'Protetores bacterianos com aditivos osmóticos asseguram a sobrevivência e viabilidade das bactérias inoculadas na semente até a germinação.',
    content: 'A dessecação e a compatibilidade química com fungicidas e inseticidas são os maiores inimigos das bactérias benéficas no tratamento de sementes. Os protetores bacterianos da Biosphera formam um filme protetor que mantém a hidratação e protege as células bacterianas contra as agressões químicas dos defensivos, aumentando a eficiência da nodulação no campo.'
  },
  {
    id: 'nova-geracao-bioinsumos',
    title: 'Nova geração de bioinsumos aumenta produtividade da soja em 4,6 sacas por hectare',
    date: '2 de setembro de 2025',
    category: 'Produtividade',
    summary: 'Resultados de campos demonstrativos confirmam o retorno financeiro do uso de inoculantes de alta concentração aliados a promotores radiculares.',
    content: 'Pesquisas realizadas em diversas safras validaram que a associação de inoculantes de alta viabilidade celular (como a linha Nitrosphera) resulta em ganhos médios de 4,6 sacas de soja por hectare. O aumento da eficiência da Fixação Biológica de Nitrogênio (FBN) reduz o custo de fertilizantes nitrogenados e eleva a lucratividade do produtor.'
  }
];
