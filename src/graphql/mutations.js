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
