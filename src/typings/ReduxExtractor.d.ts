import { InferableComponentEnhancerWithProps } from 'react-redux'

type ExtractConnectType<T> = T extends InferableComponentEnhancerWithProps<infer K, any> ? K : T
