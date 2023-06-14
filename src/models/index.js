// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, RealState, Post, Comment, Notification, NoticiaPrincipal, Noticia } = initSchema(schema);

export {
  User,
  RealState,
  Post,
  Comment,
  Notification,
  NoticiaPrincipal,
  Noticia
};