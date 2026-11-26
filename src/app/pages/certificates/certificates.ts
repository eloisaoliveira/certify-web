import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificate } from '../../_components/item-certificate/item-certificate';

@Component({
  imports: [SecondaryButton, ItemCertificate],
  selector: 'app-certificates',
  styleUrl: './certificates.css',
  templateUrl: './certificates.html',
})
export class Certificates {}
