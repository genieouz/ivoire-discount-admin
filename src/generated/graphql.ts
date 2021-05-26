import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Arbitrary object */
  Any: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};




export type AttachmentRecord = {
  __typename?: 'AttachmentRecord';
  id: Scalars['ID'];
  sizeB: Scalars['Int'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  bucketRef: Scalars['ID'];
  extension: Scalars['String'];
};

export type CardItem = {
  __typename?: 'CardItem';
  id: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
  price: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['ID'];
  parent?: Maybe<Category>;
  status: CategoryStatus;
  children: Array<Category>;
  price: Scalars['Float'];
  minPrice: Scalars['Float'];
  maxPrice: Scalars['Float'];
};

export type CategoryInput = {
  name: Scalars['String'];
  parent?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
};

export enum CategoryStatus {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED',
  Deleted = 'DELETED'
}

export type ChatMessage = {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
};

export type ChatMessageInput = {
  id: Scalars['String'];
};

export type ClientFilterInput = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['Any']>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrderByInput>;
};


export type DiscussionMessage = {
  __typename?: 'DiscussionMessage';
  id: Scalars['ID'];
};

export type DiscussionMessageInput = {
  id: Scalars['String'];
};

export type ForumMessage = {
  __typename?: 'ForumMessage';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subject: Scalars['String'];
  content: Scalars['String'];
  attachment?: Maybe<AttachmentRecord>;
  owner: Scalars['ID'];
};

export type ForumMessageInput = {
  subject: Scalars['String'];
  content: Scalars['String'];
};

export type GqlTimestamp = {
  __typename?: 'GqlTimestamp';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ImageSizes = {
  __typename?: 'ImageSizes';
  sm?: Maybe<Scalars['ID']>;
  md?: Maybe<Scalars['ID']>;
  lg?: Maybe<Scalars['ID']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  updateProduct: Product;
  removeProduct: Scalars['Boolean'];
  createCategory: Category;
  updateCategory: Category;
  removeCategory: Scalars['Boolean'];
  updateCurrentUserPassword: Scalars['Boolean'];
  closeAccount: Scalars['Boolean'];
  updateUser: User;
  register: Session;
  updatePassword: Scalars['Boolean'];
  createTask: Task;
  updateTask: Task;
  removeTask: Scalars['Boolean'];
  createChatMessage: ChatMessage;
  updateChatMessage: ChatMessage;
  removeChatMessage: Scalars['Boolean'];
  createDiscussionMessage: DiscussionMessage;
  updateDiscussionMessage: DiscussionMessage;
  removeDiscussionMessage: Scalars['Boolean'];
  chargeCard: Payment;
  createForumMessage: ForumMessage;
  updateForumMessage: ForumMessage;
  removeForumMessage: Scalars['Boolean'];
};


export type MutationCreateProductArgs = {
  productInput: ProductInput;
};


export type MutationUpdateProductArgs = {
  productInput: UpdateProductInput;
  productId: Scalars['ID'];
};


export type MutationRemoveProductArgs = {
  productId: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
  categoryInput: CategoryInput;
};


export type MutationUpdateCategoryArgs = {
  categoryInput: UpdateCategoryInput;
  categoryId: Scalars['ID'];
};


export type MutationRemoveCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type MutationUpdateCurrentUserPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  userInput: UserInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordDto: UpdatePasswordDto;
};


export type MutationCreateTaskArgs = {
  taskInput: TaskInput;
};


export type MutationUpdateTaskArgs = {
  taskInput: UpdateTaskInput;
  taskId: Scalars['ID'];
};


export type MutationRemoveTaskArgs = {
  taskId: Scalars['ID'];
};


export type MutationCreateChatMessageArgs = {
  chatMessageInput: ChatMessageInput;
};


export type MutationUpdateChatMessageArgs = {
  chatMessageInput: UpdateChatMessageInput;
  chatMessageId: Scalars['ID'];
};


export type MutationRemoveChatMessageArgs = {
  chatMessageId: Scalars['ID'];
};


export type MutationCreateDiscussionMessageArgs = {
  discussionMessageInput: DiscussionMessageInput;
};


export type MutationUpdateDiscussionMessageArgs = {
  discussionMessageInput: UpdateDiscussionMessageInput;
  discussionMessageId: Scalars['ID'];
};


export type MutationRemoveDiscussionMessageArgs = {
  discussionMessageId: Scalars['ID'];
};


export type MutationChargeCardArgs = {
  paymentInput: Scalars['Any'];
};


export type MutationCreateForumMessageArgs = {
  forumMessageInput: ForumMessageInput;
};


export type MutationUpdateForumMessageArgs = {
  forumMessageInput: UpdateForumMessageInput;
  forumMessageId: Scalars['ID'];
};


export type MutationRemoveForumMessageArgs = {
  forumMessageId: Scalars['ID'];
};

/** OrderBy direction */
export enum OrderByDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type OrderByInput = {
  property: Scalars['String'];
  direction: OrderByDirection;
};

export type Payment = {
  __typename?: 'Payment';
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  carditems?: Maybe<Array<CardItem>>;
  paymentInfos?: Maybe<Scalars['Any']>;
  charge?: Maybe<Scalars['Any']>;
};

export type PaymentInput = {
  id: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  quota?: Maybe<Scalars['Float']>;
  category?: Maybe<Category>;
  cover?: Maybe<AttachmentRecord>;
  gallery?: Maybe<Array<AttachmentRecord>>;
  variants?: Maybe<Array<Scalars['Any']>>;
};

export type ProductBill = {
  __typename?: 'ProductBill';
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CardItem>;
  paymentInfos?: Maybe<Scalars['Any']>;
  charge?: Maybe<Scalars['Any']>;
};

export type ProductInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  fetchMyProduct: Product;
  fetchMyProducts: Array<Product>;
  fetchMyCategories: Array<Category>;
  fetchCategory: Category;
  fetchCategoryByName: Category;
  fetchCategories: Array<Category>;
  fetchCategoriesForMarket: Array<Category>;
  fetchMainCategoriesForMarket: Array<Category>;
  fetchProduct: Product;
  fetchProducts: Array<Product>;
  fetchCurrentUser: User;
  login: Session;
  resetPassword: Scalars['String'];
  fetchTask: Task;
  fetchTasks: Array<Task>;
  fetchChatMessage: ChatMessage;
  fetchChatMessages: Array<ChatMessage>;
  fetchDiscussionMessage: DiscussionMessage;
  fetchDiscussionMessages: Array<DiscussionMessage>;
  fetchProviderBills: Array<ProductBill>;
  fetchForumMessage: ForumMessage;
  fetchForumMessages: Array<ForumMessage>;
};


export type QueryFetchMyProductArgs = {
  productId: Scalars['ID'];
};


export type QueryFetchMyProductsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyCategoriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type QueryFetchCategoryByNameArgs = {
  categoryName: Scalars['String'];
};


export type QueryFetchCategoriesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchProductArgs = {
  productId: Scalars['ID'];
};


export type QueryFetchProductsArgs = {
  categoryId?: Maybe<Scalars['ID']>;
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryResetPasswordArgs = {
  email: Scalars['String'];
};


export type QueryFetchTaskArgs = {
  taskId: Scalars['ID'];
};


export type QueryFetchTasksArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchChatMessageArgs = {
  chatMessageId: Scalars['ID'];
};


export type QueryFetchChatMessagesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchDiscussionMessageArgs = {
  discussionMessageId: Scalars['ID'];
};


export type QueryFetchDiscussionMessagesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchForumMessageArgs = {
  forumMessageId: Scalars['ID'];
};


export type QueryFetchForumMessagesArgs = {
  clientFilter: ClientFilterInput;
};

export type RegisterInput = {
  password: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String'];
  user: User;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['ID'];
};

export type TaskInput = {
  id: Scalars['String'];
};

export type UpdateCategoryInput = {
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
  status: CategoryStatus;
};

export type UpdateChatMessageInput = {
  id: Scalars['String'];
};

export type UpdateDiscussionMessageInput = {
  id: Scalars['String'];
};

export type UpdateForumMessageInput = {
  subject: Scalars['String'];
  content: Scalars['String'];
};

export type UpdatePasswordDto = {
  password: Scalars['String'];
  resetToken: Scalars['String'];
  resetCode: Scalars['Float'];
};

export type UpdatePaymentInput = {
  id: Scalars['String'];
};

export type UpdateProductInput = {
  id: Scalars['String'];
};

export type UpdateTaskInput = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar?: Maybe<ImageSizes>;
};

export type UserInput = {
  phoneNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type LoginQueryVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginQuery = (
  { __typename?: 'Query' }
  & { login: (
    { __typename?: 'Session' }
    & Pick<Session, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'email'>
    ) }
  ) }
);

export type FetchMyCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMyCategoriesQuery = (
  { __typename?: 'Query' }
  & { fetchMyCategories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'price' | 'status' | 'createdAt' | 'updatedAt'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )> }
);

export type FetchCategoryQueryVariables = Exact<{
  categoryId: Scalars['ID'];
}>;


export type FetchCategoryQuery = (
  { __typename?: 'Query' }
  & { fetchCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'price' | 'status' | 'createdAt'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  ) }
);

export type RemoveCategoryMutationVariables = Exact<{
  categoryId: Scalars['ID'];
}>;


export type RemoveCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCategory'>
);

export type CreateCategoryMutationVariables = Exact<{
  categoryInput: CategoryInput;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'price' | 'status' | 'owner'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  ) }
);

export type UpdateCategoryMutationVariables = Exact<{
  categoryInput: UpdateCategoryInput;
  categoryId: Scalars['ID'];
}>;


export type UpdateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'price' | 'status' | 'owner'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  ) }
);

export type FetchMyProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMyProductsQuery = (
  { __typename?: 'Query' }
  & { fetchMyProducts: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'name' | 'description' | 'price'>
    & { cover?: Maybe<(
      { __typename?: 'AttachmentRecord' }
      & Pick<AttachmentRecord, 'id'>
    )>, gallery?: Maybe<Array<(
      { __typename?: 'AttachmentRecord' }
      & Pick<AttachmentRecord, 'id'>
    )>> }
  )> }
);

export type FetchProviderBillsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchProviderBillsQuery = (
  { __typename?: 'Query' }
  & { fetchProviderBills: Array<(
    { __typename?: 'ProductBill' }
    & Pick<ProductBill, 'firstname' | 'lastname' | 'email' | 'address' | 'country' | 'phone' | 'town' | 'charge'>
    & { cartItem?: Maybe<(
      { __typename?: 'CardItem' }
      & Pick<CardItem, 'name' | 'quantity' | 'price'>
    )> }
  )> }
);

export const LoginDocument = gql`
    query Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
    user {
      firstName
      lastName
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchMyCategoriesDocument = gql`
    query FetchMyCategories {
  fetchMyCategories {
    id
    name
    price
    status
    parent {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchMyCategoriesGQL extends Apollo.Query<FetchMyCategoriesQuery, FetchMyCategoriesQueryVariables> {
    document = FetchMyCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchCategoryDocument = gql`
    query FetchCategory($categoryId: ID!) {
  fetchCategory(categoryId: $categoryId) {
    id
    name
    price
    status
    parent {
      id
      name
    }
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchCategoryGQL extends Apollo.Query<FetchCategoryQuery, FetchCategoryQueryVariables> {
    document = FetchCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveCategoryDocument = gql`
    mutation RemoveCategory($categoryId: ID!) {
  removeCategory(categoryId: $categoryId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveCategoryGQL extends Apollo.Mutation<RemoveCategoryMutation, RemoveCategoryMutationVariables> {
    document = RemoveCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCategoryDocument = gql`
    mutation CreateCategory($categoryInput: CategoryInput!) {
  createCategory(categoryInput: $categoryInput) {
    id
    name
    price
    status
    parent {
      id
      name
    }
    owner
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCategoryGQL extends Apollo.Mutation<CreateCategoryMutation, CreateCategoryMutationVariables> {
    document = CreateCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($categoryInput: UpdateCategoryInput!, $categoryId: ID!) {
  updateCategory(categoryId: $categoryId, categoryInput: $categoryInput) {
    id
    name
    price
    status
    parent {
      id
      name
    }
    owner
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCategoryGQL extends Apollo.Mutation<UpdateCategoryMutation, UpdateCategoryMutationVariables> {
    document = UpdateCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchMyProductsDocument = gql`
    query FetchMyProducts {
  fetchMyProducts {
    name
    description
    price
    cover {
      id
    }
    gallery {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchMyProductsGQL extends Apollo.Query<FetchMyProductsQuery, FetchMyProductsQueryVariables> {
    document = FetchMyProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchProviderBillsDocument = gql`
    query FetchProviderBills {
  fetchProviderBills {
    firstname
    lastname
    email
    address
    country
    phone
    town
    charge
    cartItem {
      name
      quantity
      price
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchProviderBillsGQL extends Apollo.Query<FetchProviderBillsQuery, FetchProviderBillsQueryVariables> {
    document = FetchProviderBillsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }