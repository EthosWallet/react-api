import * as ReactApi from '../src/index'
import { EthosConnectProvider, DetachedEthosConnectProvider, SignInButton } from '../src/index'

/**
 * Looks a bit of a silly test, however this ensures that we don't accidentally expose something to
 * the outside world that we didn't want!
 */
test('should expose the correct components', () => {
  const exportNames = [
    EthosConnectProvider.name,
    DetachedEthosConnectProvider.name,
    SignInButton.name,
    'ethos',
    'EthosConnectStatus',
    'TransactionBlock',
    'verifyMessage',
    'IntentScope',
    'Chain',
  ]
  expect(Object.keys(ReactApi)).toEqual(exportNames)
})
