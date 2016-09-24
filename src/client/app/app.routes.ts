import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { RexonRoutes } from './rexon/index';
import { TeamRoutes } from './team/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...TeamRoutes,
  ...RexonRoutes
];
