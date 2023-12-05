import { setupWorker } from 'msw/browser'
import { handlers, defaultHandlers } from './handlers'

export const mocker = setupWorker(...handlers, ...defaultHandlers)