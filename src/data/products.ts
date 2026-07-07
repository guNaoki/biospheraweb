export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  imgUrl: string;
  logoUrl?: string;
}

export const products: Product[] = [
  {
    id: 'nitrosphera-dualtech',
    name: 'NITROSPHERA DUALTECH',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido de alta performance formulado com estirpes selecionadas de Bradyrhizobium japonicum e aditivos protetores.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular e absorção de nutrientes',
      'Protetor bacteriano com biopolímeros, osmoprotetores e complexo de açúcares',
      'Segurança, proteção e compatibilidade dos microrganismos no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2025/08/NITROSPHERA_dualtech-1.png'
  },
  {
    id: 'nitrosphera-tropici',
    name: 'NITROSPHERA TROPICI',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido formulado com cultura pura de bactérias Rhizobium tropici, selecionadas pela eficiência em estimular a nodulação rápida.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular e sanidade de plântulas',
      'Protetor bacteriano com biopolímeros e osmoprotetores integrados',
      'Segurança, proteção e compatibilidade no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/07/RIZOSPHERA-TROPICI_Prancheta-1-copia-2-1.png'
  },
  {
    id: 'nodgrow-soja-plus',
    name: 'NODGROW SOJA +',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido composto de bactérias Bradyrhizobium japonicum de elevada viabilidade, maximizando a fixação de nitrogênio.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular',
      'Protetor bacteriano com biopolímeros, osmoprotetores e complexo de açúcares',
      'Segurança, proteção e compatibilidade dos microrganismos no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-SOJA_Prancheta-1-copia-2-1.png'
  },
  {
    id: 'nodgrow-liquido',
    name: 'NODGROW LÍQUIDO',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido desenvolvido para culturas de soja, estimulando a formação eficiente de nódulos fixadores.',
    features: [
      'Alta nodulação no sistema radicular principal',
      'Rápido estabelecimento da simbiose com as raízes da leguminosa',
      'Maior absorção e conversão de nitrogênio atmosférico',
      'Compatibilidade testada com defensivos agrícolas comuns'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-SOJA_Prancheta-1-copia-2.png'
  },
  {
    id: 'nitrosphera-elkanii-turfa',
    name: 'NITROSPHERA ELKANII TURFA',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante turfoso à base de Bradyrhizobium elkanii com umidade equilibrada e excelente aderência às sementes.',
    features: [
      'Turfa de fácil aplicação e pH ideal pré-ajustado',
      'Umidade adequada para manutenção da viabilidade bacteriana',
      'Menor custo de produção e alta rentabilidade',
      'Fonte de nitrogênio biológico de baixo custo'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NITROSPHERA-ELKANII-TURFA_Prancheta-1-copia.png'
  },
  {
    id: 'nitrosphera-fusion',
    name: 'NITROSPHERA FUSION',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido concentrado para co-inoculação em sulco, fornecendo dupla ação estimulante e fixadora.',
    features: [
      'Maior volume de calda para aplicação no sulco de plantio',
      'Bactérias selecionadas e exaustivamente testadas',
      'Fonte de nitrogênio biológico de baixíssimo custo por hectare',
      'Alta concentração e pureza de unidades formadoras de colônias (UFC)'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NITROSPHERA-FUSION_Prancheta-1-copia.png'
  },
  {
    id: 'bioaction-pro',
    name: 'BIOACTION PRO',
    category: 'Linha BioAction',
    description: 'Biotecnologia inovadora à base de Bacillus amyloliquefaciens e Bacillus subtilis para controle de estresses no solo.',
    features: [
      'Estirpes exclusivas selecionadas em condições tropicais brasileiras',
      'Produção de biofilme protetor nas raízes contra fungos patogênicos',
      'Maior tolerância a estresses climáticos e hídricos',
      'Melhoria notável na sanidade e vigor inicial das plântulas'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2023/12/BIOACTION-PRO_Prancheta-1-copia-2.png'
  },
  {
    id: 'biostart',
    name: 'BIOSTART',
    category: 'BioPromotores',
    description: 'Promotor biológico inicial formulado para acelerar o arranque da germinação e o vigor das primeiras plântulas.',
    features: [
      'Acelera a taxa de germinação inicial do lote de sementes',
      'Estímulo hormonal vegetal para desenvolvimento de raiz pivotante',
      'Maior uniformidade no estande de plantas no campo',
      'Garante maior aproveitamento dos adubos de base'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2023/12/BIOSTART_Prancheta-1-copia.png'
  },
  {
    id: 'azosphera',
    name: 'AZOSPHERA',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido formulado com Azospirillum brasilense para promoção de crescimento e fixação associativa.',
    features: [
      'Excelente produção de fitormônios promotores de crescimento radicular',
      'Melhor aproveitamento da água e de nutrientes minerais do solo',
      'Aumenta a eficiência na absorção de fertilizantes químicos nitrogenados',
      'Ideal para co-inoculação em soja ou aplicação em gramíneas'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/01/AZOSPHERA_Prancheta-1-copia.png'
  },
  {
    id: 'safe-power-nod',
    name: 'SAFE POWER NOD',
    category: 'Protetores',
    description: 'Aditivo protetor osmótico e alimentício formulado para estender a vida útil das bactérias inoculadas na semente.',
    features: [
      'Cria uma película protetora elástica ao redor das bactérias',
      'Reduz a taxa de mortalidade celular devido à dessecação no tratamento de sementes',
      'Nutre os microrganismos benéficos antes do processo de nodulação',
      'Aumenta a compatibilidade dos inoculantes com fungicidas e inseticidas'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/01/SAFE-POWER-NOD_Prancheta-1-copia-2.png'
  },
  {
    id: 'bioaction-power',
    name: 'BIOACTION POWER',
    category: 'Linha BioAction',
    description: 'Estimulante biológico concentrado à base de esporos bacterianos estáveis para aumento de vigor e desempenho biológico no campo.',
    features: [
      'Alta concentração de esporos que mantêm a estabilidade no tratamento de sementes',
      'Ativação imediata de rotas de autodefesa e crescimento radicular da plântula',
      'Estímulo sinérgico da germinação e colonização do sistema de raízes',
      'Compatibilidade total com fungicidas e inseticidas químicos'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2023/12/BIOACTION-POWER_Prancheta-1-copia-2.png'
  }
];
