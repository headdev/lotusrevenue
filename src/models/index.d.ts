import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone_number?: string | null;
  readonly address?: string | null;
  readonly email?: string | null;
  readonly isCompletedKYC?: boolean | null;
  readonly currentStateKYC?: string | null;
  readonly externalURLKYC?: string | null;
  readonly hasSigned?: boolean | null;
  readonly dateSigned?: string | null;
  readonly isPaymentProcessing?: boolean | null;
  readonly username?: string | null;
  readonly isBanned?: string | null;
  readonly isAgent?: string | null;
  readonly isSupport?: string | null;
  readonly properties?: (RealState | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone_number?: string | null;
  readonly address?: string | null;
  readonly email?: string | null;
  readonly isCompletedKYC?: boolean | null;
  readonly currentStateKYC?: string | null;
  readonly externalURLKYC?: string | null;
  readonly hasSigned?: boolean | null;
  readonly dateSigned?: string | null;
  readonly isPaymentProcessing?: boolean | null;
  readonly username?: string | null;
  readonly isBanned?: string | null;
  readonly isAgent?: string | null;
  readonly isSupport?: string | null;
  readonly properties: AsyncCollection<RealState>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerRealState = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RealState, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly priceUSD: string;
  readonly title: string;
  readonly bedroom: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly bathrooms: number;
  readonly area: number;
  readonly country: string;
  readonly city: string;
  readonly ubication: string;
  readonly userID: string;
}

type LazyRealState = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RealState, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly priceUSD: string;
  readonly title: string;
  readonly bedroom: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly bathrooms: number;
  readonly area: number;
  readonly country: string;
  readonly city: string;
  readonly ubication: string;
  readonly userID: string;
}

export declare type RealState = LazyLoading extends LazyLoadingDisabled ? EagerRealState : LazyRealState

export declare const RealState: (new (init: ModelInit<RealState>) => RealState) & {
  copyOf(source: RealState, mutator: (draft: MutableModel<RealState>) => MutableModel<RealState> | void): RealState;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly comments?: (Comment | null)[] | null;
  readonly rID: string;
  readonly description: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly posts?: RealState | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly comments: AsyncCollection<Comment>;
  readonly rID: string;
  readonly description: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly posts: AsyncItem<RealState | undefined>;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: Post;
  readonly content: string;
  readonly author: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
  readonly commentAuthorId: string;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post>;
  readonly content: string;
  readonly author: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
  readonly commentAuthorId: string;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}