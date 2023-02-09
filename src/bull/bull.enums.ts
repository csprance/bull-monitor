export enum REDIS_KEYSPACE_EVENT_TYPES {
  DELETE = 'del',
  HSET = 'hset',
  RPUSH = 'rpush',
}

export enum REDIS_EVENT_TYPES {
  CLOSE = 'close',
  END = 'end',
  ERROR = 'error',
  PMESSAGE = 'pmessage',
  READY = 'ready',
  RECONNECTING = 'reconnecting',
}

export enum REDIS_CLIENTS {
  PUBLISH = 'publish',
  SUBSCRIBE = 'subscriber',
}

export enum EVENT_TYPES {
  QUEUE_CREATED = 'queue.created',
  QUEUE_REMOVED = 'queue.removed',
  QUEUE_SERVICE_CLOSED = 'queueService.closed',
  QUEUE_SERVICE_READY = 'queueService.ready',
}

export enum QUEUE_TYPES {
  BULL3 = 'bull3',
  BULLMQ = 'bullmq',
  BULLMQ_PRO = 'bullmq-prod',
}

export enum UI_TYPES {
  ARENA = 'arena',
  BULL_BOARD = 'bull-board',
  BULL_MASTER = 'bull-master',
}
