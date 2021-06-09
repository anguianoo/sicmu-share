import { gql } from "apollo-boost"

export const ADD_OR_REMOVE_FROM_QUEUE = gql`
  mutation addOrRemoveFromQueue($input: SongInput!) {
    addOrRemoveFromQueue(input: $input) @client
  }
`

export const ADD_SONG = gql`
  mutation addSong(
    $title: String!
    $artist: String!
    $thumbnail: String!
    $duration: Float
    $url: String
  ) {
    insert_songs(
      objects: {
        artist: $artist
        duration: $duration
        thumbnail: $thumbnail
        title: $title
        url: $url
      }
    ) {
      affected_rows
    }
  }
`
// export const REMOVE_SONG = gql`
//   mutation removeSong($id: uuid!) {
//     delete_songs(where: { id: { _eq: $id } }) {
//       returning {
//         id
//         artist
//         created_at
//         duration
//         thumbnail
//         title
//         url
//       }
//     }
//   }
// `
