/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          description
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          score
          amenities
          surplusValue
          profitability
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          description
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          score
          amenities
          surplusValue
          profitability
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          description
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          score
          amenities
          surplusValue
          profitability
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createNoticiaPrincipal = /* GraphQL */ `
  mutation CreateNoticiaPrincipal(
    $input: CreateNoticiaPrincipalInput!
    $condition: ModelNoticiaPrincipalConditionInput
  ) {
    createNoticiaPrincipal(input: $input, condition: $condition) {
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
export const updateNoticiaPrincipal = /* GraphQL */ `
  mutation UpdateNoticiaPrincipal(
    $input: UpdateNoticiaPrincipalInput!
    $condition: ModelNoticiaPrincipalConditionInput
  ) {
    updateNoticiaPrincipal(input: $input, condition: $condition) {
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
export const deleteNoticiaPrincipal = /* GraphQL */ `
  mutation DeleteNoticiaPrincipal(
    $input: DeleteNoticiaPrincipalInput!
    $condition: ModelNoticiaPrincipalConditionInput
  ) {
    deleteNoticiaPrincipal(input: $input, condition: $condition) {
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
export const createNoticia = /* GraphQL */ `
  mutation CreateNoticia(
    $input: CreateNoticiaInput!
    $condition: ModelNoticiaConditionInput
  ) {
    createNoticia(input: $input, condition: $condition) {
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
export const updateNoticia = /* GraphQL */ `
  mutation UpdateNoticia(
    $input: UpdateNoticiaInput!
    $condition: ModelNoticiaConditionInput
  ) {
    updateNoticia(input: $input, condition: $condition) {
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
export const deleteNoticia = /* GraphQL */ `
  mutation DeleteNoticia(
    $input: DeleteNoticiaInput!
    $condition: ModelNoticiaConditionInput
  ) {
    deleteNoticia(input: $input, condition: $condition) {
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
export const createRealState = /* GraphQL */ `
  mutation CreateRealState(
    $input: CreateRealStateInput!
    $condition: ModelRealStateConditionInput
  ) {
    createRealState(input: $input, condition: $condition) {
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
      description
      bedroom
      createdAt
      updatedAt
      bathrooms
      area
      country
      score
      amenities
      surplusValue
      profitability
      city
      ubication
      userID
    }
  }
`;
export const updateRealState = /* GraphQL */ `
  mutation UpdateRealState(
    $input: UpdateRealStateInput!
    $condition: ModelRealStateConditionInput
  ) {
    updateRealState(input: $input, condition: $condition) {
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
      description
      bedroom
      createdAt
      updatedAt
      bathrooms
      area
      country
      score
      amenities
      surplusValue
      profitability
      city
      ubication
      userID
    }
  }
`;
export const deleteRealState = /* GraphQL */ `
  mutation DeleteRealState(
    $input: DeleteRealStateInput!
    $condition: ModelRealStateConditionInput
  ) {
    deleteRealState(input: $input, condition: $condition) {
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
      description
      bedroom
      createdAt
      updatedAt
      bathrooms
      area
      country
      score
      amenities
      surplusValue
      profitability
      city
      ubication
      userID
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        description
        bedroom
        createdAt
        updatedAt
        bathrooms
        area
        country
        score
        amenities
        surplusValue
        profitability
        city
        ubication
        userID
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        description
        bedroom
        createdAt
        updatedAt
        bathrooms
        area
        country
        score
        amenities
        surplusValue
        profitability
        city
        ubication
        userID
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        description
        bedroom
        createdAt
        updatedAt
        bathrooms
        area
        country
        score
        amenities
        surplusValue
        profitability
        city
        ubication
        userID
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
          description
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          score
          amenities
          surplusValue
          profitability
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
          description
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          score
          amenities
          surplusValue
          profitability
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
          description
          bedroom
          createdAt
          updatedAt
          bathrooms
          area
          country
          score
          amenities
          surplusValue
          profitability
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
