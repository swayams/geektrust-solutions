import { problem2 } from '../config/input'
import { PollRecount, VotesToWin } from '../config/configuration'
import performBallot from './../entity/election';

import ListOfKingdoms from './init';

performBallot(problem2.messages,
     { claimants: problem2.claimants, VotesToWin: VotesToWin, ListOfKingdoms:ListOfKingdoms})
