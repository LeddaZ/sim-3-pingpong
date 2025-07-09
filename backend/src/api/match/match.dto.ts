import { IsBoolean, IsDateString, IsMongoId, IsNumber } from 'class-validator'

export class CreateMatchDTO {
  @IsDateString()
  date: string

  @IsMongoId()
  playerA: string

  @IsMongoId()
  playerB: string

  @IsNumber()
  scoreA: number

  @IsNumber()
  scoreB: number

  @IsBoolean()
  played: boolean
}
