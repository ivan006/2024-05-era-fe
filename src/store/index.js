import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'

import {DBCrudCacheSet} from "quicklists-vue-orm-ui";

import Address from 'src/models/Address';
import Attachment from 'src/models/Attachment';
import Audit from 'src/models/Audit';
import Bank from 'src/models/Bank';
import Communication from 'src/models/Communication';
import ContactNumber from 'src/models/ContactNumber';
import Crm from 'src/models/Crm';
import Document from 'src/models/Document';
import DocumentDetail from 'src/models/DocumentDetail';
import DomainUser from 'src/models/DomainUser';
import Dummy from 'src/models/Dummy';
import Email from 'src/models/Email';
import Entity from 'src/models/Entity';
import EntityAudit from 'src/models/EntityAudit';
import EntityEvent from 'src/models/EntityEvent';
import EntityGood from 'src/models/EntityGood';
import EntityGoodApproval from 'src/models/EntityGoodApproval';
import EntityRelationship from 'src/models/EntityRelationship';
import ExternalProducer from 'src/models/ExternalProducer';
import Good from 'src/models/Good';
import InstanceNo from 'src/models/InstanceNo';
import Migration from 'src/models/Migration';
import Object from 'src/models/Object';
import ObjectTrait from 'src/models/ObjectTrait';
import ObjectValue from 'src/models/ObjectValue';
import PasswordHash from 'src/models/PasswordHash';
import ProductProvider from 'src/models/ProductProvider';
import Query from 'src/models/Query';
import QueryHeader from 'src/models/QueryHeader';
import Relative from 'src/models/Relative';
import Requirement from 'src/models/Requirement';
import RequirementDetail from 'src/models/RequirementDetail';
import Rule from 'src/models/Rule';
import RuleAction from 'src/models/RuleAction';
import RuleActionDatum from 'src/models/RuleActionDatum';
import RuleConfig from 'src/models/RuleConfig';
import RuleEntityRole from 'src/models/RuleEntityRole';
import ServiceRequest from 'src/models/ServiceRequest';
import ServiceRequestFrequency from 'src/models/ServiceRequestFrequency';
import ServiceRequestReport from 'src/models/ServiceRequestReport';
import SystemAction from 'src/models/SystemAction';
import SystemCode from 'src/models/SystemCode';
import SystemConfiguration from 'src/models/SystemConfiguration';
import SystemLog from 'src/models/SystemLog';
import SystemUser from 'src/models/SystemUser';
import Transaction from 'src/models/Transaction';
import TreatmentDetail from 'src/models/TreatmentDetail';
import UserAccess from 'src/models/UserAccess';
import UserConfiguration from 'src/models/UserConfiguration';
import UserDevice from 'src/models/UserDevice';
import UserRole from 'src/models/UserRole';
import UserRoleAccess from 'src/models/UserRoleAccess';
import WebsiteProducerRegistration from 'src/models/WebsiteProducerRegistration';
import LoginSession from 'src/models/model-helpers/LoginSession';
import User from 'src/models/model-helpers/User';

// Initialize the database
const database = new VuexORM.Database()

// Register models
database.register(DBCrudCacheSet);
database.register(Address);
database.register(Attachment);
database.register(Audit);
database.register(Bank);
database.register(Communication);
database.register(ContactNumber);
database.register(Crm);
database.register(Document);
database.register(DocumentDetail);
database.register(DomainUser);
database.register(Dummy);
database.register(Email);
database.register(Entity);
database.register(EntityAudit);
database.register(EntityEvent);
database.register(EntityGood);
database.register(EntityGoodApproval);
database.register(EntityRelationship);
database.register(ExternalProducer);
database.register(Good);
database.register(InstanceNo);
database.register(Migration);
database.register(Object);
database.register(ObjectTrait);
database.register(ObjectValue);
database.register(PasswordHash);
database.register(ProductProvider);
database.register(Query);
database.register(QueryHeader);
database.register(Relative);
database.register(Requirement);
database.register(RequirementDetail);
database.register(Rule);
database.register(RuleAction);
database.register(RuleActionDatum);
database.register(RuleConfig);
database.register(RuleEntityRole);
database.register(ServiceRequest);
database.register(ServiceRequestFrequency);
database.register(ServiceRequestReport);
database.register(SystemAction);
database.register(SystemCode);
database.register(SystemConfiguration);
database.register(SystemLog);
database.register(SystemUser);
database.register(Transaction);
database.register(TreatmentDetail);
database.register(UserAccess);
database.register(UserConfiguration);
database.register(UserDevice);
database.register(UserRole);
database.register(UserRoleAccess);
database.register(WebsiteProducerRegistration);
database.register(User);
database.register(LoginSession);
// Create Vuex store
const store = createStore({
  plugins: [VuexORM.install(database)]
})

export default store
