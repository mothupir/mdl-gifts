import { Injectable } from '@angular/core';
import MetaMaskSDK, { SDKProvider } from '@metamask/sdk';
import { SpinnerService } from '../spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private sdk: MetaMaskSDK | undefined;
  private provider: SDKProvider | undefined;
  
  constructor(private spinnerService: SpinnerService) {
    this.sdk = new MetaMaskSDK({
      dappMetadata: {
        name: 'MDL Gifts'
      }
    });
  }

  async connect() {
    this.spinnerService.show();
    await this.sdk?.connect().then((res) => {
      sessionStorage.setItem('connected', '1');
      this.spinnerService.hide();
      this.provider = this.sdk?.getProvider();
      this.registerEvents();
    }).catch((e) => {
      this.spinnerService.hide();
      throw e;
    }).finally(() => this.spinnerService.hide());
  }

  disconnect() {
    console.log("Disconnected");
    sessionStorage.removeItem('connected');
    this.sdk?.terminate();
  }

  connected() {
    const connected = sessionStorage.getItem('connected');
    if (connected && connected == '1') {
      this.connect();
    }
    return this.provider?.isConnected();
  }

  getProvider() {
    return this.provider;
  }

  registerEvents() {
    console.log("rpovider:", this.provider);
    this.provider?.on('accountsChanged', () => this.disconnect());
  }
}
