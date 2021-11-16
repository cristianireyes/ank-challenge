import { gql } from '@apollo/client';

export const GET_CITY = gql`
  query getCity($name: String!) {
    city: getCityByName(name: $name, config: { units: metric, lang: es }) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;
