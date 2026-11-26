import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificate } from './_components/item-certificate/item-certificate';
import { BaseUi } from './_components/base-ui/base-ui';

@Component({
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, ItemCertificate, BaseUi],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
