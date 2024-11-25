import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SecondToMinutes } from "./secondToMinutes.pipe";
import { SafeEmbedPipe } from "./safe-embed.pipe"

@NgModule({
  declarations: [
    SecondToMinutes,
    SafeEmbedPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondToMinutes,
    SafeEmbedPipe
  ]
})
export class CustomPipe { }