import { gql} from '@apollo/client'

//for this type of functions gql and apollo infer you are making a read only action
//so you dont have to specify this is a Query type, as oposed to the mutation types

export const getAll = gql`
  {    
    getAll{
      id
      title
      description
    }
  }
`