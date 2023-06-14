/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone_number
      address
      email
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
      dateSigned
      isPaymentProcessing
      username
      isBanned
      isAgent
      isSupport
      properties {
        items {
          id
          name
          priceUSD
          title
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          city
          ubication
          userID
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone_number
        address
        email
        isCompletedKYC
        currentStateKYC
        externalURLKYC
        hasSigned
        dateSigned
        isPaymentProcessing
        username
        isBanned
        isAgent
        isSupport
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      title
      description
      timestamp
      type
      time12h
      date
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        timestamp
        type
        time12h
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNoticiaPrincipal = /* GraphQL */ `
  query GetNoticiaPrincipal($id: ID!) {
    getNoticiaPrincipal(id: $id) {
      id
      title
      subtitle
      publishedDate
      source
      timestamp
      externalUrl
      portada
      createdAt
      updatedAt
    }
  }
`;
export const listNoticiaPrincipals = /* GraphQL */ `
  query ListNoticiaPrincipals(
    $filter: ModelNoticiaPrincipalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoticiaPrincipals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subtitle
        publishedDate
        source
        timestamp
        externalUrl
        portada
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNoticia = /* GraphQL */ `
  query GetNoticia($id: ID!) {
    getNoticia(id: $id) {
      id
      title
      subtitle
      publishedDate
      timestamp
      time12h
      type
      externalUrl
      optionalImage
      createdAt
      updatedAt
    }
  }
`;
export const listNoticias = /* GraphQL */ `
  query ListNoticias(
    $filter: ModelNoticiaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoticias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        publishedDate
        timestamp
        time12h
        type
        externalUrl
        optionalImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRealState = /* GraphQL */ `
  query GetRealState($id: ID!) {
    getRealState(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          rID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      priceUSD
      title
      bedroom
      createdAt
      updatedAt
      bathrooms
      area
      country
      city
      ubication
      userID
    }
  }
`;
export const listRealStates = /* GraphQL */ `
  query ListRealStates(
    $filter: ModelRealStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRealStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        priceUSD
        title
        bedroom
        createdAt
        updatedAt
        bathrooms
        area
        country
        city
        ubication
        userID
      }
      nextToken
    }
  }
`;
export const realStatesByUserID = /* GraphQL */ `
  query RealStatesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRealStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    realStatesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        posts {
          nextToken
        }
        priceUSD
        title
        bedroom
        createdAt
        updatedAt
        bathrooms
        area
        country
        city
        ubication
        userID
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          commentAuthorId
        }
        nextToken
      }
      rID
      description
      createdAt
      updatedAt
      posts {
        id
        name
        posts {
          nextToken
        }
        priceUSD
        title
        bedroom
        createdAt
        updatedAt
        bathrooms
        area
        country
        city
        ubication
        userID
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        comments {
          nextToken
        }
        rID
        description
        createdAt
        updatedAt
        posts {
          id
          name
          priceUSD
          title
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          city
          ubication
          userID
        }
      }
      nextToken
    }
  }
`;
export const postsByRID = /* GraphQL */ `
  query PostsByRID(
    $rID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByRID(
      rID: $rID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        comments {
          nextToken
        }
        rID
        description
        createdAt
        updatedAt
        posts {
          id
          name
          priceUSD
          title
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          city
          ubication
          userID
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        comments {
          nextToken
        }
        rID
        description
        createdAt
        updatedAt
        posts {
          id
          name
          priceUSD
          title
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          city
          ubication
          userID
        }
      }
      content
      author {
        id
        name
        phone_number
        address
        email
        isCompletedKYC
        currentStateKYC
        externalURLKYC
        hasSigned
        dateSigned
        isPaymentProcessing
        username
        isBanned
        isAgent
        isSupport
        properties {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
      commentAuthorId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          rID
          description
          createdAt
          updatedAt
        }
        content
        author {
          id
          name
          phone_number
          address
          email
          isCompletedKYC
          currentStateKYC
          externalURLKYC
          hasSigned
          dateSigned
          isPaymentProcessing
          username
          isBanned
          isAgent
          isSupport
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        postCommentsId
        commentAuthorId
      }
      nextToken
    }
  }
`;
