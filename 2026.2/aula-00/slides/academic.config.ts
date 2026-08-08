/**
 * Informações acadêmicas compartilhadas pela capa e pelo rodapé.
 *
 * Edite somente este objeto ao reutilizar o template para outra apresentação.
 */
export interface AcademicPresentation {
  courseName: string
  subjectName: string
  subjectAcronym: string
  subjectCode: string
  professorName: string
  professorContact: string
  presentationTitle: string
}

export const academicConfig = {
  courseName: 'Especialização em Desenvolvimento Fullstack - EAD',
  subjectName: 'Seminários II',
  subjectAcronym: 'SEMII',
  subjectCode: 'DFS03011',
  professorName: 'Filipe Fernandes, PhD',
  professorContact: 'filipe.fernandes@ifsudestemg.edu.br',
  presentationTitle: 'Apresentação da Disciplina',
} satisfies AcademicPresentation

