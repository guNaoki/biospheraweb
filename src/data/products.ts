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
    description: 'Formulado com Bradyrhizobium japonicum em uma formulação líquida inovadora com turfa de Sphagnum de alta qualidade.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular e absorção de nutrientes',
      'Protetor bacteriano com biopolímeros, osmoprotetores e complexo de açúcares',
      'Segurança, proteção e compatibilidade dos microrganismos no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2025/08/NITROSPHERA_dualtech-1.png',
    logoUrl: 'https://biosphera.agr.br/wp-content/uploads/2025/08/Logo-DualTech-Branco.png'
  },
  {
    id: 'nitrosphera-tropici',
    name: 'NITROSPHERA TROPICI',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Este inoculante líquido é cuidadosamente formulado com uma cultura pura de bactérias Rhizobium tropici, altamente eficazes em estimular a nodulação.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular e sanidade de plântulas',
      'Protetor bacteriano com biopolímeros e osmoprotetores integrados',
      'Segurança, proteção e compatibilidade no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/07/Nitrosphera-tropici-scaled-822x600.jpg',
    logoUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/07/RIZOSPHERA-TROPICI_Prancheta-1-copia-2-1.png'
  },
  {
    id: 'nodgrow-soja-plus',
    name: 'NODGROW SOJA +',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido composto de uma cultura pura de bactérias Bradyrhizobium japonicum que proporcionam uma elevada fixação biológica de nitrogênio.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular',
      'Protetor bacteriano com biopolímeros, osmoprotetores e complexo de açúcares',
      'Segurança, proteção e compatibilidade dos microrganismos no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-soja-1-scaled-822x600.jpg',
    logoUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-SOJA_Prancheta-1-copia-2-1.png'
  },
  {
    id: 'nodgrow-liquido',
    name: 'NODGROW LÍQUIDO',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido de alta performance composto por estirpes selecionadas de bactérias para alta nodulação e fixação em soja.',
    features: [
      'Produção de fitormônios para maior e melhor desenvolvimento vegetal',
      'Maior desenvolvimento radicular',
      'Protetor bacteriano com biopolímeros, osmoprotetores e complexo de açúcares',
      'Segurança, proteção e compatibilidade dos microrganismos no tratamento de sementes'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-soja-scaled-822x600.jpg',
    logoUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NODGROW-SOJA_Prancheta-1-copia-2.png'
  },
  {
    id: 'nitrosphera-elkanii-turfa',
    name: 'NITROSPHERA ELKANII TURFA',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante turfoso de alta qualidade, desenvolvido para promover a fixação biológica de nitrogênio em culturas agrícolas.',
    features: [
      'Turfa de fácil aplicação e pH ideal pré-ajustado',
      'Umidade adequada para manutenção da viabilidade bacteriana',
      'Menor custo de produção e alta rentabilidade',
      'Fonte de nitrogênio biológico de baixo custo'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NITROSPHERA-elkani-scaled-822x600.jpg',
    logoUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NITROSPHERA-ELKANII-TURFA_Prancheta-1-copia.png'
  },
  {
    id: 'nitrosphera-fusion',
    name: 'NITROSPHERA FUSION',
    category: 'Fixação Biológica de Nitrogênio',
    description: 'Inoculante líquido de alta concentração, meticulosamente formulado para promover uma dupla ação benéfica nas culturas agrícolas.',
    features: [
      'Maior volume de calda para aplicação no sulco de plantio',
      'Bactérias selecionadas e exaustivamente testadas',
      'Fonte de nitrogênio biológico de baixíssimo custo por hectare',
      'Alta concentração e pureza de unidades formadoras de colônias (UFC)'
    ],
    imgUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/Nitrosphera-Fusion-Foto-exemplar.png',
    logoUrl: 'https://biosphera.agr.br/wp-content/uploads/2024/06/NITROSPHERA-FUSION_Prancheta-1-copia.png'
  }
];
