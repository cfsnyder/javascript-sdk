import { CommitPolicy, ShutdownPolicy } from '../../vpg/vpg-failover/__json__';

export interface FailoverParamsRequestJson {
  checkpoint_identifier: string;
  commit_policy: CommitPolicy;
  shutdown_policy: ShutdownPolicy;
  time_to_wait_before_shutdown_in_sec: number;
  commit_value: number;
}
