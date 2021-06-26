  import Server from './Server';
  import { configuration } from './config';
  const server = new Server(configuration);
  server.bootStrap();
  server.run();
