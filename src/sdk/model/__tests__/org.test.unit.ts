import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Org } from '../org';
import { MockOrgVappsJson } from '../../__mocks__/responses/org/vapps';
import { MockOrgJson } from '../../__mocks__/responses/org/org';
import { MockOrgVmsJson } from '../../__mocks__/responses/org/vms';
import { MockOrgVdcsJson } from '../../__mocks__/responses/org/vdcs';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get Org', async() => {
  let uuid = 'test-org-uuid';
  return Org.getOrg(uuid).then(function(org) {
    expect(Iland.getHttp().get).lastCalledWith(`/org/${uuid}`);
    expect(org.getEntityType()).toBe('ORG');
  });
});

test('Properly submits request to get Orgs child vDCs', async() => {
  let org = new Org(MockOrgJson);
  return org.getVdcs().then(function(vdcs) {
    expect(Iland.getHttp().get).lastCalledWith(`/org/${org.getUuid()}/vdcs`);
    expect(vdcs.length).toBe(MockOrgVdcsJson.length);
    let idx = 0;
    for (let vdc of vdcs) {
      expect(vdc.getJson()).toEqual(MockOrgVdcsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child vApps', async() => {
  let org = new Org(MockOrgJson);
  return org.getVapps().then(function(vapps) {
    expect(Iland.getHttp().get).lastCalledWith(`/org/${org.getUuid()}/vapps`);
    expect(vapps.length).toBe(MockOrgVappsJson.length);
    let idx = 0;
    for (let vapp of vapps) {
      expect(vapp.getJson()).toEqual(MockOrgVappsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child VMs', async() => {
  let org = new Org(MockOrgJson);
  return org.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/org/${org.getUuid()}/vms`);
    expect(vms.length).toBe(MockOrgVmsJson.length);
    let idx = 0;
    for (let vm of vms) {
      expect(vm.getJson()).toEqual(MockOrgVmsJson[idx]);
      idx++;
    }
  });
});
