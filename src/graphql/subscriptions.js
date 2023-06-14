/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
export const onCreateNoticiaPrincipal = /* GraphQL */ `
  subscription OnCreateNoticiaPrincipal(
    $filter: ModelSubscriptionNoticiaPrincipalFilterInput
  ) {
    onCreateNoticiaPrincipal(filter: $filter) {
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
export const onUpdateNoticiaPrincipal = /* GraphQL */ `
  subscription OnUpdateNoticiaPrincipal(
    $filter: ModelSubscriptionNoticiaPrincipalFilterInput
  ) {
    onUpdateNoticiaPrincipal(filter: $filter) {
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
export const onDeleteNoticiaPrincipal = /* GraphQL */ `
  subscription OnDeleteNoticiaPrincipal(
    $filter: ModelSubscriptionNoticiaPrincipalFilterInput
  ) {
    onDeleteNoticiaPrincipal(filter: $filter) {
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
export const onCreateNoticia = /* GraphQL */ `
  subscription OnCreateNoticia($filter: ModelSubscriptionNoticiaFilterInput) {
    onCreateNoticia(filter: $filter) {
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
export const onUpdateNoticia = /* GraphQL */ `
  subscription OnUpdateNoticia($filter: ModelSubscriptionNoticiaFilterInput) {
    onUpdateNoticia(filter: $filter) {
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
export const onDeleteNoticia = /* GraphQL */ `
  subscription OnDeleteNoticia($filter: ModelSubscriptionNoticiaFilterInput) {
    onDeleteNoticia(filter: $filter) {
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
export const onCreateRealState = /* GraphQL */ `
  subscription OnCreateRealState(
    $filter: ModelSubscriptionRealStateFilterInput
  ) {
    onCreateRealState(filter: $filter) {
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
export const onUpdateRealState = /* GraphQL */ `
  subscription OnUpdateRealState(
    $filter: ModelSubscriptionRealStateFilterInput
  ) {
    onUpdateRealState(filter: $filter) {
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
export const onDeleteRealState = /* GraphQL */ `
  subscription OnDeleteRealState(
    $filter: ModelSubscriptionRealStateFilterInput
  ) {
    onDeleteRealState(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
