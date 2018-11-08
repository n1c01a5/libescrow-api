import _ from 'lodash'

import isRequired from '../utils/isRequired'
import delegateCalls from '../utils/delegateCalls'

/**
 * Abstract Contract holds a contract implementation to make calls to the blockchain but
 * also includes methods that interact with the off chain store. NOTE all methods that
 * the underlying contract implementation expose can be called directly from an Abstract contract.
 */
class AbstractContract {
  /**
   * AbstractContract wraps an implementation instance to provide access to higher level
   * services such as an off chain store, as well as the functionality of the underlying
   * implementation.
   * @param {object} implementationInstance - Contract Implementation object to extend
   * @param {object} storeProviderInstance - StoreProvider wrapper object.
   */
  constructor(
    implementationInstance = isRequired('implementationInstance'),
    storeProviderInstance = isRequired('storeProviderInstance')
  ) {
    this._StoreProvider = storeProviderInstance
    this._contractImplementation = implementationInstance
    delegateCalls(this, implementationInstance)
  }

  /**
   * Set store provider instance.
   * @param {object} storeProviderInstance - instance of store provider wrapper.
   */
  setStoreProviderInstance = storeProviderInstance => {
    this._StoreProvider = storeProviderInstance
  }
}

export default AbstractContract
