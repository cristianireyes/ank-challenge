import { gql } from '@apollo/client';

export const GET_CITIES = gql`
  query getCities($cities_id: [String!]) {
    cities: getCityById(id: $cities_id, config: { units: metric, lang: es }) {
      id
      name
      weather {
        summary {
          icon
          description
        }
        temperature {
          actual
        }
      }
    }
  }
`;
