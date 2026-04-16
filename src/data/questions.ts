import { Question } from '../types/questions';

export const chapterQuestions: Record<string, Question[]> = {
  chapter1: [
    {
      id: 'ch1_q2',
      type: 'true-false',
      number: 2,
      question: 'Leia as afirmações abaixo e identifique se são verdadeiras ou falsas. Depois, corrija as afirmações falsas.',
      hasCorrectionBox: true,
      correctionPlaceholder: 'Corrija as afirmações falsas aqui...',
      statements: [
        {
          letter: 'a',
          statement: 'A linha-fina é usada para expressar a opinião da autora sobre o tema da notícia.',
          correctAnswer: false,
          correction: 'A linha-fina não expressa opinião; ela antecipa ou destaca uma informação relevante, complementando o título.',
        },
        {
          letter: 'b',
          statement: 'A autora da notícia usa terceira pessoa para contar o fato.',
          correctAnswer: true,
        },
        {
          letter: 'c',
          statement: 'A notícia apresenta falas do diretor do Robot Mall como fonte.',
          correctAnswer: true,
        },
        {
          letter: 'd',
          statement: 'Os verbos principais da notícia estão no tempo futuro, pois o evento ainda vai acontecer.',
          correctAnswer: false,
          correction: 'Os verbos estão no passado, porque o fato já aconteceu.',
        },
        {
          letter: 'e',
          statement: 'As informações mais importantes da notícia aparecem no final do texto.',
          correctAnswer: false,
          correction: 'As informações mais importantes aparecem no início da notícia, como é típico do gênero.',
        },
      ],
    },
    {
      id: 'ch1_q8',
      type: 'text-input',
      number: 4,
      question: 'Pesquise os portais onde cada notícia foi publicada: a <em>Época Negócios e o Olhar Digital</em>. Como as escolhas feitas pelas autoras refletem a identidade de cada um deles?',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'A Época Negócios, voltada para temas de economia, inovação e modelos de negócio, estruturou a notícia com foco mais técnico, abordando o funcionamento da loja, os serviços oferecidos e a proposta do modelo 4S. Já o Olhar Digital, voltado para tecnologia e tendências de consumo, usou linguagem mais acessível e deu ênfase à experiência do público com os robôs, mostrando curiosidades, impacto social e o protagonismo da China no setor tecnológico. Essas escolhas refletem os diferentes públicos-alvo e os objetivos de cada veículo de comunicação.',
    },
    {
      id: 'ch1_q11',
      type: 'table-fill',
      number: 3,
      question: 'Indique, na tabela a seguir, se os elementos da notícia estão presentes nos textos III e IV e como cada um deles é apresentado.',
      columns: ['Elemento', 'Está presentenos textos?', 'Como aparece?'],
      rows: [
        {
          id: 'row1',
          paragraph: 'Título',
          text1: '',
          text2: '',
        },
        {
          id: 'row2',
          paragraph: 'Linha-fina',
          text1: '',
          text2: '',
        },
        {
          id: 'row3',
          paragraph: 'Lide',
          text1: '',
          text2: '',
        },
        {
          id: 'row4',
          paragraph: 'Corpo da notícia',
          text1: '',
          text2: '',
        },
        {
          id: 'row5',
          paragraph: 'Fechamento',
          text1: '',
          text2: '',
        },
      ],
      correctAnswer: {
        'ch1_q11_row1_col1': 'Não',
        'ch1_q11_row1_col2': 'Não há título lido pelo apresentador. O tema é apresentado diretamente no início da notícia. ',
        'ch1_q11_row2_col1': 'Não',
        'ch1_q11_row2_col2': 'Não há linha-fina como ocorre na notícia impressa. ',
        'ch1_q11_row3_col1': 'Sim',
        'ch1_q11_row3_col2': 'Está presente, com as informações mais importantes no início da notícia.',
        'ch1_q11_row4_col1': 'Sim',
        'ch1_q11_row4_col2': 'Organizado como narração, com apoio visual no telejornal.',
        'ch1_q11_row5_col1': 'Sim',
        'ch1_q11_row5_col2': 'Marcado por um comentário final e por dados sobre projeções futuras.',
      },
    },
  ],
};
