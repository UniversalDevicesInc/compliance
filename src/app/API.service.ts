/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDomainInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelDomainConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelDomainConditionInput | null> | null;
  or?: Array<ModelDomainConditionInput | null> | null;
  not?: ModelDomainConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export enum State {
  NEW = "NEW",
  REVIEW = "REVIEW",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED"
}

export type UpdateDomainInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteDomainInput = {
  id?: string | null;
};

export type CreateComplianceInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  domainId: string;
  hint?: string | null;
  state: State;
  author?: string | null;
  lastModifiedBy?: string | null;
};

export type ModelComplianceConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  domainId?: ModelIDInput | null;
  hint?: ModelStringInput | null;
  state?: ModelStateInput | null;
  author?: ModelStringInput | null;
  lastModifiedBy?: ModelStringInput | null;
  and?: Array<ModelComplianceConditionInput | null> | null;
  or?: Array<ModelComplianceConditionInput | null> | null;
  not?: ModelComplianceConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelStateInput = {
  eq?: State | null;
  ne?: State | null;
};

export type UpdateComplianceInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  domainId?: string | null;
  hint?: string | null;
  state?: State | null;
  author?: string | null;
  lastModifiedBy?: string | null;
};

export type DeleteComplianceInput = {
  id?: string | null;
};

export type CreateComplianceStatusLinkInput = {
  id?: string | null;
  complianceId: string;
  statusId: string;
};

export type ModelComplianceStatusLinkConditionInput = {
  complianceId?: ModelIDInput | null;
  statusId?: ModelIDInput | null;
  and?: Array<ModelComplianceStatusLinkConditionInput | null> | null;
  or?: Array<ModelComplianceStatusLinkConditionInput | null> | null;
  not?: ModelComplianceStatusLinkConditionInput | null;
};

export type UpdateComplianceStatusLinkInput = {
  id: string;
  complianceId?: string | null;
  statusId?: string | null;
};

export type DeleteComplianceStatusLinkInput = {
  id?: string | null;
};

export type CreateStatusInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  editorId: string;
};

export type ModelStatusConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  editorId?: ModelIDInput | null;
  and?: Array<ModelStatusConditionInput | null> | null;
  or?: Array<ModelStatusConditionInput | null> | null;
  not?: ModelStatusConditionInput | null;
};

export type UpdateStatusInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  editorId?: string | null;
};

export type DeleteStatusInput = {
  id?: string | null;
};

export type CreateComplianceCommandLinkInput = {
  id?: string | null;
  complianceId: string;
  commandId: string;
};

export type ModelComplianceCommandLinkConditionInput = {
  complianceId?: ModelIDInput | null;
  commandId?: ModelIDInput | null;
  and?: Array<ModelComplianceCommandLinkConditionInput | null> | null;
  or?: Array<ModelComplianceCommandLinkConditionInput | null> | null;
  not?: ModelComplianceCommandLinkConditionInput | null;
};

export type UpdateComplianceCommandLinkInput = {
  id: string;
  complianceId?: string | null;
  commandId?: string | null;
};

export type DeleteComplianceCommandLinkInput = {
  id?: string | null;
};

export type CreateCommandInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  subValues?: string | null;
};

export type ModelCommandConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  and?: Array<ModelCommandConditionInput | null> | null;
  or?: Array<ModelCommandConditionInput | null> | null;
  not?: ModelCommandConditionInput | null;
};

export type UpdateCommandInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  subValues?: string | null;
};

export type DeleteCommandInput = {
  id?: string | null;
};

export type CreateEditorInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelEditorConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEditorConditionInput | null> | null;
  or?: Array<ModelEditorConditionInput | null> | null;
  not?: ModelEditorConditionInput | null;
};

export type UpdateEditorInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteEditorInput = {
  id?: string | null;
};

export type CreateEditorRangeInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  editorId?: string | null;
  subset?: string | null;
  min?: number | null;
  max?: number | null;
  step?: number | null;
  uomId: string;
};

export type ModelEditorRangeConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  editorId?: ModelIDInput | null;
  subset?: ModelStringInput | null;
  min?: ModelIntInput | null;
  max?: ModelIntInput | null;
  step?: ModelFloatInput | null;
  uomId?: ModelIDInput | null;
  and?: Array<ModelEditorRangeConditionInput | null> | null;
  or?: Array<ModelEditorRangeConditionInput | null> | null;
  not?: ModelEditorRangeConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateEditorRangeInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  editorId?: string | null;
  subset?: string | null;
  min?: number | null;
  max?: number | null;
  step?: number | null;
  uomId?: string | null;
};

export type DeleteEditorRangeInput = {
  id?: string | null;
};

export type CreateNlsInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  subValues?: string | null;
};

export type ModelNlsConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  and?: Array<ModelNlsConditionInput | null> | null;
  or?: Array<ModelNlsConditionInput | null> | null;
  not?: ModelNlsConditionInput | null;
};

export type UpdateNlsInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  subValues?: string | null;
};

export type DeleteNlsInput = {
  id?: string | null;
};

export type CreateUomInput = {
  id?: string | null;
  name: number;
  description?: string | null;
  subValues?: string | null;
};

export type ModelUomConditionInput = {
  name?: ModelIntInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  and?: Array<ModelUomConditionInput | null> | null;
  or?: Array<ModelUomConditionInput | null> | null;
  not?: ModelUomConditionInput | null;
};

export type UpdateUomInput = {
  id: string;
  name?: number | null;
  description?: string | null;
  subValues?: string | null;
};

export type DeleteUomInput = {
  id?: string | null;
};

export type CreateComplianceLogInput = {
  id?: string | null;
  comment: string;
  complianceId: string;
};

export type ModelComplianceLogConditionInput = {
  comment?: ModelStringInput | null;
  complianceId?: ModelIDInput | null;
  and?: Array<ModelComplianceLogConditionInput | null> | null;
  or?: Array<ModelComplianceLogConditionInput | null> | null;
  not?: ModelComplianceLogConditionInput | null;
};

export type UpdateComplianceLogInput = {
  id: string;
  comment?: string | null;
  complianceId?: string | null;
};

export type DeleteComplianceLogInput = {
  id?: string | null;
};

export type CreateStaticInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  subValues?: string | null;
  type: Type;
};

export enum Type {
  UOM = "UOM",
  STATUS = "STATUS",
  EDITOR = "EDITOR"
}

export type ModelStaticConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  type?: ModelTypeInput | null;
  and?: Array<ModelStaticConditionInput | null> | null;
  or?: Array<ModelStaticConditionInput | null> | null;
  not?: ModelStaticConditionInput | null;
};

export type ModelTypeInput = {
  eq?: Type | null;
  ne?: Type | null;
};

export type UpdateStaticInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  subValues?: string | null;
  type?: Type | null;
};

export type DeleteStaticInput = {
  id?: string | null;
};

export type ModelDomainFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelDomainFilterInput | null> | null;
  or?: Array<ModelDomainFilterInput | null> | null;
  not?: ModelDomainFilterInput | null;
};

export type ModelComplianceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  domainId?: ModelIDInput | null;
  hint?: ModelStringInput | null;
  state?: ModelStateInput | null;
  author?: ModelStringInput | null;
  lastModifiedBy?: ModelStringInput | null;
  and?: Array<ModelComplianceFilterInput | null> | null;
  or?: Array<ModelComplianceFilterInput | null> | null;
  not?: ModelComplianceFilterInput | null;
};

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  editorId?: ModelIDInput | null;
  and?: Array<ModelStatusFilterInput | null> | null;
  or?: Array<ModelStatusFilterInput | null> | null;
  not?: ModelStatusFilterInput | null;
};

export type ModelCommandFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  and?: Array<ModelCommandFilterInput | null> | null;
  or?: Array<ModelCommandFilterInput | null> | null;
  not?: ModelCommandFilterInput | null;
};

export type ModelEditorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEditorFilterInput | null> | null;
  or?: Array<ModelEditorFilterInput | null> | null;
  not?: ModelEditorFilterInput | null;
};

export type ModelEditorRangeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  editorId?: ModelIDInput | null;
  subset?: ModelStringInput | null;
  min?: ModelIntInput | null;
  max?: ModelIntInput | null;
  step?: ModelFloatInput | null;
  uomId?: ModelIDInput | null;
  and?: Array<ModelEditorRangeFilterInput | null> | null;
  or?: Array<ModelEditorRangeFilterInput | null> | null;
  not?: ModelEditorRangeFilterInput | null;
};

export type ModelNlsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  and?: Array<ModelNlsFilterInput | null> | null;
  or?: Array<ModelNlsFilterInput | null> | null;
  not?: ModelNlsFilterInput | null;
};

export type ModelUomFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelIntInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  and?: Array<ModelUomFilterInput | null> | null;
  or?: Array<ModelUomFilterInput | null> | null;
  not?: ModelUomFilterInput | null;
};

export type ModelComplianceLogFilterInput = {
  id?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  complianceId?: ModelIDInput | null;
  and?: Array<ModelComplianceLogFilterInput | null> | null;
  or?: Array<ModelComplianceLogFilterInput | null> | null;
  not?: ModelComplianceLogFilterInput | null;
};

export type ModelStaticFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  subValues?: ModelStringInput | null;
  type?: ModelTypeInput | null;
  and?: Array<ModelStaticFilterInput | null> | null;
  or?: Array<ModelStaticFilterInput | null> | null;
  not?: ModelStaticFilterInput | null;
};

export type CreateDomainMutation = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateDomainMutation = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteDomainMutation = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateComplianceMutation = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateComplianceMutation = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteComplianceMutation = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateComplianceStatusLinkMutation = {
  __typename: "ComplianceStatusLink";
  id: string;
  complianceId: string;
  statusId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  status: {
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  };
};

export type UpdateComplianceStatusLinkMutation = {
  __typename: "ComplianceStatusLink";
  id: string;
  complianceId: string;
  statusId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  status: {
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  };
};

export type DeleteComplianceStatusLinkMutation = {
  __typename: "ComplianceStatusLink";
  id: string;
  complianceId: string;
  statusId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  status: {
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  };
};

export type CreateStatusMutation = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateStatusMutation = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteStatusMutation = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateComplianceCommandLinkMutation = {
  __typename: "ComplianceCommandLink";
  id: string;
  complianceId: string;
  commandId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  command: {
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  };
};

export type UpdateComplianceCommandLinkMutation = {
  __typename: "ComplianceCommandLink";
  id: string;
  complianceId: string;
  commandId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  command: {
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  };
};

export type DeleteComplianceCommandLinkMutation = {
  __typename: "ComplianceCommandLink";
  id: string;
  complianceId: string;
  commandId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  command: {
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  };
};

export type CreateCommandMutation = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type UpdateCommandMutation = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type DeleteCommandMutation = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type CreateEditorMutation = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateEditorMutation = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteEditorMutation = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateEditorRangeMutation = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateEditorRangeMutation = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteEditorRangeMutation = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateNlsMutation = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type UpdateNlsMutation = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type DeleteNlsMutation = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type CreateUomMutation = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUomMutation = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUomMutation = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateComplianceLogMutation = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type UpdateComplianceLogMutation = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type DeleteComplianceLogMutation = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type CreateStaticMutation = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

export type UpdateStaticMutation = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

export type DeleteStaticMutation = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

export type GetDomainQuery = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListDomainsQuery = {
  __typename: "ModelDomainConnection";
  items: Array<{
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetComplianceQuery = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListCompliancesQuery = {
  __typename: "ModelComplianceConnection";
  items: Array<{
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetStatusQuery = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListStatussQuery = {
  __typename: "ModelStatusConnection";
  items: Array<{
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommandQuery = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type ListCommandsQuery = {
  __typename: "ModelCommandConnection";
  items: Array<{
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetEditorQuery = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListEditorsQuery = {
  __typename: "ModelEditorConnection";
  items: Array<{
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetEditorRangeQuery = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListEditorRangesQuery = {
  __typename: "ModelEditorRangeConnection";
  items: Array<{
    __typename: "EditorRange";
    id: string;
    name: string | null;
    description: string | null;
    editorId: string | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subset: string | null;
    min: number | null;
    max: number | null;
    step: number | null;
    uomId: string;
    uom: {
      __typename: "Uom";
      id: string;
      name: number;
      description: string | null;
      subValues: string | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetNlsQuery = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type ListNlssQuery = {
  __typename: "ModelNlsConnection";
  items: Array<{
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUomQuery = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListUomsQuery = {
  __typename: "ModelUomConnection";
  items: Array<{
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetComplianceLogQuery = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type ListComplianceLogsQuery = {
  __typename: "ModelComplianceLogConnection";
  items: Array<{
    __typename: "ComplianceLog";
    id: string;
    comment: string;
    complianceId: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetStaticQuery = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

export type ListStaticsQuery = {
  __typename: "ModelStaticConnection";
  items: Array<{
    __typename: "Static";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
    type: Type;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateDomainSubscription = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateDomainSubscription = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteDomainSubscription = {
  __typename: "Domain";
  id: string;
  name: string;
  description: string | null;
  compliances: {
    __typename: "ModelComplianceConnection";
    items: Array<{
      __typename: "Compliance";
      id: string;
      name: string;
      description: string | null;
      domainId: string;
      domain: {
        __typename: "Domain";
        id: string;
        name: string;
        description: string | null;
        compliances: {
          __typename: "ModelComplianceConnection";
          nextToken: string | null;
        } | null;
      } | null;
      hint: string | null;
      state: State;
      author: string | null;
      lastModifiedBy: string | null;
      complianceLogs: {
        __typename: "ModelComplianceLogConnection";
        items: Array<{
          __typename: "ComplianceLog";
          id: string;
          comment: string;
          complianceId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      status: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateComplianceSubscription = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateComplianceSubscription = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteComplianceSubscription = {
  __typename: "Compliance";
  id: string;
  name: string;
  description: string | null;
  domainId: string;
  domain: {
    __typename: "Domain";
    id: string;
    name: string;
    description: string | null;
    compliances: {
      __typename: "ModelComplianceConnection";
      items: Array<{
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  hint: string | null;
  state: State;
  author: string | null;
  lastModifiedBy: string | null;
  complianceLogs: {
    __typename: "ModelComplianceLogConnection";
    items: Array<{
      __typename: "ComplianceLog";
      id: string;
      comment: string;
      complianceId: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateComplianceStatusLinkSubscription = {
  __typename: "ComplianceStatusLink";
  id: string;
  complianceId: string;
  statusId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  status: {
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  };
};

export type OnUpdateComplianceStatusLinkSubscription = {
  __typename: "ComplianceStatusLink";
  id: string;
  complianceId: string;
  statusId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  status: {
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  };
};

export type OnDeleteComplianceStatusLinkSubscription = {
  __typename: "ComplianceStatusLink";
  id: string;
  complianceId: string;
  statusId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  status: {
    __typename: "Status";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editorId: string;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  };
};

export type OnCreateStatusSubscription = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateStatusSubscription = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteStatusSubscription = {
  __typename: "Status";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceStatusLinkConnection";
    items: Array<{
      __typename: "ComplianceStatusLink";
      id: string;
      complianceId: string;
      statusId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      status: {
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editorId: string;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateComplianceCommandLinkSubscription = {
  __typename: "ComplianceCommandLink";
  id: string;
  complianceId: string;
  commandId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  command: {
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  };
};

export type OnUpdateComplianceCommandLinkSubscription = {
  __typename: "ComplianceCommandLink";
  id: string;
  complianceId: string;
  commandId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  command: {
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  };
};

export type OnDeleteComplianceCommandLinkSubscription = {
  __typename: "ComplianceCommandLink";
  id: string;
  complianceId: string;
  commandId: string;
  compliance: {
    __typename: "Compliance";
    id: string;
    name: string;
    description: string | null;
    domainId: string;
    domain: {
      __typename: "Domain";
      id: string;
      name: string;
      description: string | null;
      compliances: {
        __typename: "ModelComplianceConnection";
        items: Array<{
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    hint: string | null;
    state: State;
    author: string | null;
    lastModifiedBy: string | null;
    complianceLogs: {
      __typename: "ModelComplianceLogConnection";
      items: Array<{
        __typename: "ComplianceLog";
        id: string;
        comment: string;
        complianceId: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    status: {
      __typename: "ModelComplianceStatusLinkConnection";
      items: Array<{
        __typename: "ComplianceStatusLink";
        id: string;
        complianceId: string;
        statusId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        status: {
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
  };
  command: {
    __typename: "Command";
    id: string;
    name: string;
    description: string | null;
    compliance: {
      __typename: "ModelComplianceCommandLinkConnection";
      items: Array<{
        __typename: "ComplianceCommandLink";
        id: string;
        complianceId: string;
        commandId: string;
        compliance: {
          __typename: "Compliance";
          id: string;
          name: string;
          description: string | null;
          domainId: string;
          hint: string | null;
          state: State;
          author: string | null;
          lastModifiedBy: string | null;
        };
        command: {
          __typename: "Command";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        };
      } | null> | null;
      nextToken: string | null;
    } | null;
    editor: {
      __typename: "Editor";
      id: string;
      name: string;
      description: string | null;
      status: {
        __typename: "ModelStatusConnection";
        items: Array<{
          __typename: "Status";
          id: string;
          name: string;
          description: string | null;
          editorId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      ranges: {
        __typename: "ModelEditorRangeConnection";
        items: Array<{
          __typename: "EditorRange";
          id: string;
          name: string | null;
          description: string | null;
          editorId: string | null;
          subset: string | null;
          min: number | null;
          max: number | null;
          step: number | null;
          uomId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
    nls: {
      __typename: "Nls";
      id: string;
      name: string;
      description: string | null;
      subValues: string | null;
    } | null;
    subValues: string | null;
  };
};

export type OnCreateCommandSubscription = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type OnUpdateCommandSubscription = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type OnDeleteCommandSubscription = {
  __typename: "Command";
  id: string;
  name: string;
  description: string | null;
  compliance: {
    __typename: "ModelComplianceCommandLinkConnection";
    items: Array<{
      __typename: "ComplianceCommandLink";
      id: string;
      complianceId: string;
      commandId: string;
      compliance: {
        __typename: "Compliance";
        id: string;
        name: string;
        description: string | null;
        domainId: string;
        domain: {
          __typename: "Domain";
          id: string;
          name: string;
          description: string | null;
        } | null;
        hint: string | null;
        state: State;
        author: string | null;
        lastModifiedBy: string | null;
        complianceLogs: {
          __typename: "ModelComplianceLogConnection";
          nextToken: string | null;
        } | null;
        status: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
      };
      command: {
        __typename: "Command";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceCommandLinkConnection";
          nextToken: string | null;
        } | null;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subValues: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  editor: {
    __typename: "Editor";
    id: string;
    name: string;
    description: string | null;
    status: {
      __typename: "ModelStatusConnection";
      items: Array<{
        __typename: "Status";
        id: string;
        name: string;
        description: string | null;
        compliance: {
          __typename: "ModelComplianceStatusLinkConnection";
          nextToken: string | null;
        } | null;
        editorId: string;
        editor: {
          __typename: "Editor";
          id: string;
          name: string;
          description: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subValues: string | null;
};

export type OnCreateEditorSubscription = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateEditorSubscription = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteEditorSubscription = {
  __typename: "Editor";
  id: string;
  name: string;
  description: string | null;
  status: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      name: string;
      description: string | null;
      compliance: {
        __typename: "ModelComplianceStatusLinkConnection";
        items: Array<{
          __typename: "ComplianceStatusLink";
          id: string;
          complianceId: string;
          statusId: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      editorId: string;
      editor: {
        __typename: "Editor";
        id: string;
        name: string;
        description: string | null;
        status: {
          __typename: "ModelStatusConnection";
          nextToken: string | null;
        } | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateEditorRangeSubscription = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateEditorRangeSubscription = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteEditorRangeSubscription = {
  __typename: "EditorRange";
  id: string;
  name: string | null;
  description: string | null;
  editorId: string | null;
  nls: {
    __typename: "Nls";
    id: string;
    name: string;
    description: string | null;
    subValues: string | null;
  } | null;
  subset: string | null;
  min: number | null;
  max: number | null;
  step: number | null;
  uomId: string;
  uom: {
    __typename: "Uom";
    id: string;
    name: number;
    description: string | null;
    subValues: string | null;
    ranges: {
      __typename: "ModelEditorRangeConnection";
      items: Array<{
        __typename: "EditorRange";
        id: string;
        name: string | null;
        description: string | null;
        editorId: string | null;
        nls: {
          __typename: "Nls";
          id: string;
          name: string;
          description: string | null;
          subValues: string | null;
        } | null;
        subset: string | null;
        min: number | null;
        max: number | null;
        step: number | null;
        uomId: string;
        uom: {
          __typename: "Uom";
          id: string;
          name: number;
          description: string | null;
          subValues: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateNlsSubscription = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type OnUpdateNlsSubscription = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type OnDeleteNlsSubscription = {
  __typename: "Nls";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
};

export type OnCreateUomSubscription = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUomSubscription = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUomSubscription = {
  __typename: "Uom";
  id: string;
  name: number;
  description: string | null;
  subValues: string | null;
  ranges: {
    __typename: "ModelEditorRangeConnection";
    items: Array<{
      __typename: "EditorRange";
      id: string;
      name: string | null;
      description: string | null;
      editorId: string | null;
      nls: {
        __typename: "Nls";
        id: string;
        name: string;
        description: string | null;
        subValues: string | null;
      } | null;
      subset: string | null;
      min: number | null;
      max: number | null;
      step: number | null;
      uomId: string;
      uom: {
        __typename: "Uom";
        id: string;
        name: number;
        description: string | null;
        subValues: string | null;
        ranges: {
          __typename: "ModelEditorRangeConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateComplianceLogSubscription = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type OnUpdateComplianceLogSubscription = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type OnDeleteComplianceLogSubscription = {
  __typename: "ComplianceLog";
  id: string;
  comment: string;
  complianceId: string;
};

export type OnCreateStaticSubscription = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

export type OnUpdateStaticSubscription = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

export type OnDeleteStaticSubscription = {
  __typename: "Static";
  id: string;
  name: string;
  description: string | null;
  subValues: string | null;
  type: Type;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDomain(
    input: CreateDomainInput,
    condition?: ModelDomainConditionInput
  ): Promise<CreateDomainMutation> {
    const statement = `mutation CreateDomain($input: CreateDomainInput!, $condition: ModelDomainConditionInput) {
        createDomain(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDomainMutation>response.data.createDomain;
  }
  async UpdateDomain(
    input: UpdateDomainInput,
    condition?: ModelDomainConditionInput
  ): Promise<UpdateDomainMutation> {
    const statement = `mutation UpdateDomain($input: UpdateDomainInput!, $condition: ModelDomainConditionInput) {
        updateDomain(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDomainMutation>response.data.updateDomain;
  }
  async DeleteDomain(
    input: DeleteDomainInput,
    condition?: ModelDomainConditionInput
  ): Promise<DeleteDomainMutation> {
    const statement = `mutation DeleteDomain($input: DeleteDomainInput!, $condition: ModelDomainConditionInput) {
        deleteDomain(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDomainMutation>response.data.deleteDomain;
  }
  async CreateCompliance(
    input: CreateComplianceInput,
    condition?: ModelComplianceConditionInput
  ): Promise<CreateComplianceMutation> {
    const statement = `mutation CreateCompliance($input: CreateComplianceInput!, $condition: ModelComplianceConditionInput) {
        createCompliance(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateComplianceMutation>response.data.createCompliance;
  }
  async UpdateCompliance(
    input: UpdateComplianceInput,
    condition?: ModelComplianceConditionInput
  ): Promise<UpdateComplianceMutation> {
    const statement = `mutation UpdateCompliance($input: UpdateComplianceInput!, $condition: ModelComplianceConditionInput) {
        updateCompliance(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateComplianceMutation>response.data.updateCompliance;
  }
  async DeleteCompliance(
    input: DeleteComplianceInput,
    condition?: ModelComplianceConditionInput
  ): Promise<DeleteComplianceMutation> {
    const statement = `mutation DeleteCompliance($input: DeleteComplianceInput!, $condition: ModelComplianceConditionInput) {
        deleteCompliance(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteComplianceMutation>response.data.deleteCompliance;
  }
  async CreateComplianceStatusLink(
    input: CreateComplianceStatusLinkInput,
    condition?: ModelComplianceStatusLinkConditionInput
  ): Promise<CreateComplianceStatusLinkMutation> {
    const statement = `mutation CreateComplianceStatusLink($input: CreateComplianceStatusLinkInput!, $condition: ModelComplianceStatusLinkConditionInput) {
        createComplianceStatusLink(input: $input, condition: $condition) {
          __typename
          id
          complianceId
          statusId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          status {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateComplianceStatusLinkMutation>(
      response.data.createComplianceStatusLink
    );
  }
  async UpdateComplianceStatusLink(
    input: UpdateComplianceStatusLinkInput,
    condition?: ModelComplianceStatusLinkConditionInput
  ): Promise<UpdateComplianceStatusLinkMutation> {
    const statement = `mutation UpdateComplianceStatusLink($input: UpdateComplianceStatusLinkInput!, $condition: ModelComplianceStatusLinkConditionInput) {
        updateComplianceStatusLink(input: $input, condition: $condition) {
          __typename
          id
          complianceId
          statusId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          status {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateComplianceStatusLinkMutation>(
      response.data.updateComplianceStatusLink
    );
  }
  async DeleteComplianceStatusLink(
    input: DeleteComplianceStatusLinkInput,
    condition?: ModelComplianceStatusLinkConditionInput
  ): Promise<DeleteComplianceStatusLinkMutation> {
    const statement = `mutation DeleteComplianceStatusLink($input: DeleteComplianceStatusLinkInput!, $condition: ModelComplianceStatusLinkConditionInput) {
        deleteComplianceStatusLink(input: $input, condition: $condition) {
          __typename
          id
          complianceId
          statusId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          status {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteComplianceStatusLinkMutation>(
      response.data.deleteComplianceStatusLink
    );
  }
  async CreateStatus(
    input: CreateStatusInput,
    condition?: ModelStatusConditionInput
  ): Promise<CreateStatusMutation> {
    const statement = `mutation CreateStatus($input: CreateStatusInput!, $condition: ModelStatusConditionInput) {
        createStatus(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStatusMutation>response.data.createStatus;
  }
  async UpdateStatus(
    input: UpdateStatusInput,
    condition?: ModelStatusConditionInput
  ): Promise<UpdateStatusMutation> {
    const statement = `mutation UpdateStatus($input: UpdateStatusInput!, $condition: ModelStatusConditionInput) {
        updateStatus(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStatusMutation>response.data.updateStatus;
  }
  async DeleteStatus(
    input: DeleteStatusInput,
    condition?: ModelStatusConditionInput
  ): Promise<DeleteStatusMutation> {
    const statement = `mutation DeleteStatus($input: DeleteStatusInput!, $condition: ModelStatusConditionInput) {
        deleteStatus(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStatusMutation>response.data.deleteStatus;
  }
  async CreateComplianceCommandLink(
    input: CreateComplianceCommandLinkInput,
    condition?: ModelComplianceCommandLinkConditionInput
  ): Promise<CreateComplianceCommandLinkMutation> {
    const statement = `mutation CreateComplianceCommandLink($input: CreateComplianceCommandLinkInput!, $condition: ModelComplianceCommandLinkConditionInput) {
        createComplianceCommandLink(input: $input, condition: $condition) {
          __typename
          id
          complianceId
          commandId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          command {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateComplianceCommandLinkMutation>(
      response.data.createComplianceCommandLink
    );
  }
  async UpdateComplianceCommandLink(
    input: UpdateComplianceCommandLinkInput,
    condition?: ModelComplianceCommandLinkConditionInput
  ): Promise<UpdateComplianceCommandLinkMutation> {
    const statement = `mutation UpdateComplianceCommandLink($input: UpdateComplianceCommandLinkInput!, $condition: ModelComplianceCommandLinkConditionInput) {
        updateComplianceCommandLink(input: $input, condition: $condition) {
          __typename
          id
          complianceId
          commandId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          command {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateComplianceCommandLinkMutation>(
      response.data.updateComplianceCommandLink
    );
  }
  async DeleteComplianceCommandLink(
    input: DeleteComplianceCommandLinkInput,
    condition?: ModelComplianceCommandLinkConditionInput
  ): Promise<DeleteComplianceCommandLinkMutation> {
    const statement = `mutation DeleteComplianceCommandLink($input: DeleteComplianceCommandLinkInput!, $condition: ModelComplianceCommandLinkConditionInput) {
        deleteComplianceCommandLink(input: $input, condition: $condition) {
          __typename
          id
          complianceId
          commandId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          command {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteComplianceCommandLinkMutation>(
      response.data.deleteComplianceCommandLink
    );
  }
  async CreateCommand(
    input: CreateCommandInput,
    condition?: ModelCommandConditionInput
  ): Promise<CreateCommandMutation> {
    const statement = `mutation CreateCommand($input: CreateCommandInput!, $condition: ModelCommandConditionInput) {
        createCommand(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommandMutation>response.data.createCommand;
  }
  async UpdateCommand(
    input: UpdateCommandInput,
    condition?: ModelCommandConditionInput
  ): Promise<UpdateCommandMutation> {
    const statement = `mutation UpdateCommand($input: UpdateCommandInput!, $condition: ModelCommandConditionInput) {
        updateCommand(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommandMutation>response.data.updateCommand;
  }
  async DeleteCommand(
    input: DeleteCommandInput,
    condition?: ModelCommandConditionInput
  ): Promise<DeleteCommandMutation> {
    const statement = `mutation DeleteCommand($input: DeleteCommandInput!, $condition: ModelCommandConditionInput) {
        deleteCommand(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommandMutation>response.data.deleteCommand;
  }
  async CreateEditor(
    input: CreateEditorInput,
    condition?: ModelEditorConditionInput
  ): Promise<CreateEditorMutation> {
    const statement = `mutation CreateEditor($input: CreateEditorInput!, $condition: ModelEditorConditionInput) {
        createEditor(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEditorMutation>response.data.createEditor;
  }
  async UpdateEditor(
    input: UpdateEditorInput,
    condition?: ModelEditorConditionInput
  ): Promise<UpdateEditorMutation> {
    const statement = `mutation UpdateEditor($input: UpdateEditorInput!, $condition: ModelEditorConditionInput) {
        updateEditor(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEditorMutation>response.data.updateEditor;
  }
  async DeleteEditor(
    input: DeleteEditorInput,
    condition?: ModelEditorConditionInput
  ): Promise<DeleteEditorMutation> {
    const statement = `mutation DeleteEditor($input: DeleteEditorInput!, $condition: ModelEditorConditionInput) {
        deleteEditor(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEditorMutation>response.data.deleteEditor;
  }
  async CreateEditorRange(
    input: CreateEditorRangeInput,
    condition?: ModelEditorRangeConditionInput
  ): Promise<CreateEditorRangeMutation> {
    const statement = `mutation CreateEditorRange($input: CreateEditorRangeInput!, $condition: ModelEditorRangeConditionInput) {
        createEditorRange(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEditorRangeMutation>response.data.createEditorRange;
  }
  async UpdateEditorRange(
    input: UpdateEditorRangeInput,
    condition?: ModelEditorRangeConditionInput
  ): Promise<UpdateEditorRangeMutation> {
    const statement = `mutation UpdateEditorRange($input: UpdateEditorRangeInput!, $condition: ModelEditorRangeConditionInput) {
        updateEditorRange(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEditorRangeMutation>response.data.updateEditorRange;
  }
  async DeleteEditorRange(
    input: DeleteEditorRangeInput,
    condition?: ModelEditorRangeConditionInput
  ): Promise<DeleteEditorRangeMutation> {
    const statement = `mutation DeleteEditorRange($input: DeleteEditorRangeInput!, $condition: ModelEditorRangeConditionInput) {
        deleteEditorRange(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEditorRangeMutation>response.data.deleteEditorRange;
  }
  async CreateNls(
    input: CreateNlsInput,
    condition?: ModelNlsConditionInput
  ): Promise<CreateNlsMutation> {
    const statement = `mutation CreateNls($input: CreateNlsInput!, $condition: ModelNlsConditionInput) {
        createNls(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNlsMutation>response.data.createNls;
  }
  async UpdateNls(
    input: UpdateNlsInput,
    condition?: ModelNlsConditionInput
  ): Promise<UpdateNlsMutation> {
    const statement = `mutation UpdateNls($input: UpdateNlsInput!, $condition: ModelNlsConditionInput) {
        updateNls(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNlsMutation>response.data.updateNls;
  }
  async DeleteNls(
    input: DeleteNlsInput,
    condition?: ModelNlsConditionInput
  ): Promise<DeleteNlsMutation> {
    const statement = `mutation DeleteNls($input: DeleteNlsInput!, $condition: ModelNlsConditionInput) {
        deleteNls(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNlsMutation>response.data.deleteNls;
  }
  async CreateUom(
    input: CreateUomInput,
    condition?: ModelUomConditionInput
  ): Promise<CreateUomMutation> {
    const statement = `mutation CreateUom($input: CreateUomInput!, $condition: ModelUomConditionInput) {
        createUom(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUomMutation>response.data.createUom;
  }
  async UpdateUom(
    input: UpdateUomInput,
    condition?: ModelUomConditionInput
  ): Promise<UpdateUomMutation> {
    const statement = `mutation UpdateUom($input: UpdateUomInput!, $condition: ModelUomConditionInput) {
        updateUom(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUomMutation>response.data.updateUom;
  }
  async DeleteUom(
    input: DeleteUomInput,
    condition?: ModelUomConditionInput
  ): Promise<DeleteUomMutation> {
    const statement = `mutation DeleteUom($input: DeleteUomInput!, $condition: ModelUomConditionInput) {
        deleteUom(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUomMutation>response.data.deleteUom;
  }
  async CreateComplianceLog(
    input: CreateComplianceLogInput,
    condition?: ModelComplianceLogConditionInput
  ): Promise<CreateComplianceLogMutation> {
    const statement = `mutation CreateComplianceLog($input: CreateComplianceLogInput!, $condition: ModelComplianceLogConditionInput) {
        createComplianceLog(input: $input, condition: $condition) {
          __typename
          id
          comment
          complianceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateComplianceLogMutation>response.data.createComplianceLog;
  }
  async UpdateComplianceLog(
    input: UpdateComplianceLogInput,
    condition?: ModelComplianceLogConditionInput
  ): Promise<UpdateComplianceLogMutation> {
    const statement = `mutation UpdateComplianceLog($input: UpdateComplianceLogInput!, $condition: ModelComplianceLogConditionInput) {
        updateComplianceLog(input: $input, condition: $condition) {
          __typename
          id
          comment
          complianceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateComplianceLogMutation>response.data.updateComplianceLog;
  }
  async DeleteComplianceLog(
    input: DeleteComplianceLogInput,
    condition?: ModelComplianceLogConditionInput
  ): Promise<DeleteComplianceLogMutation> {
    const statement = `mutation DeleteComplianceLog($input: DeleteComplianceLogInput!, $condition: ModelComplianceLogConditionInput) {
        deleteComplianceLog(input: $input, condition: $condition) {
          __typename
          id
          comment
          complianceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteComplianceLogMutation>response.data.deleteComplianceLog;
  }
  async CreateStatic(
    input: CreateStaticInput,
    condition?: ModelStaticConditionInput
  ): Promise<CreateStaticMutation> {
    const statement = `mutation CreateStatic($input: CreateStaticInput!, $condition: ModelStaticConditionInput) {
        createStatic(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStaticMutation>response.data.createStatic;
  }
  async UpdateStatic(
    input: UpdateStaticInput,
    condition?: ModelStaticConditionInput
  ): Promise<UpdateStaticMutation> {
    const statement = `mutation UpdateStatic($input: UpdateStaticInput!, $condition: ModelStaticConditionInput) {
        updateStatic(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStaticMutation>response.data.updateStatic;
  }
  async DeleteStatic(
    input: DeleteStaticInput,
    condition?: ModelStaticConditionInput
  ): Promise<DeleteStaticMutation> {
    const statement = `mutation DeleteStatic($input: DeleteStaticInput!, $condition: ModelStaticConditionInput) {
        deleteStatic(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStaticMutation>response.data.deleteStatic;
  }
  async GetDomain(id: string): Promise<GetDomainQuery> {
    const statement = `query GetDomain($id: ID!) {
        getDomain(id: $id) {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDomainQuery>response.data.getDomain;
  }
  async ListDomains(
    filter?: ModelDomainFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDomainsQuery> {
    const statement = `query ListDomains($filter: ModelDomainFilterInput, $limit: Int, $nextToken: String) {
        listDomains(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDomainsQuery>response.data.listDomains;
  }
  async GetCompliance(id: string): Promise<GetComplianceQuery> {
    const statement = `query GetCompliance($id: ID!) {
        getCompliance(id: $id) {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetComplianceQuery>response.data.getCompliance;
  }
  async ListCompliances(
    filter?: ModelComplianceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompliancesQuery> {
    const statement = `query ListCompliances($filter: ModelComplianceFilterInput, $limit: Int, $nextToken: String) {
        listCompliances(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompliancesQuery>response.data.listCompliances;
  }
  async GetStatus(id: string): Promise<GetStatusQuery> {
    const statement = `query GetStatus($id: ID!) {
        getStatus(id: $id) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStatusQuery>response.data.getStatus;
  }
  async ListStatuss(
    filter?: ModelStatusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStatussQuery> {
    const statement = `query ListStatuss($filter: ModelStatusFilterInput, $limit: Int, $nextToken: String) {
        listStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStatussQuery>response.data.listStatuss;
  }
  async GetCommand(id: string): Promise<GetCommandQuery> {
    const statement = `query GetCommand($id: ID!) {
        getCommand(id: $id) {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommandQuery>response.data.getCommand;
  }
  async ListCommands(
    filter?: ModelCommandFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommandsQuery> {
    const statement = `query ListCommands($filter: ModelCommandFilterInput, $limit: Int, $nextToken: String) {
        listCommands(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommandsQuery>response.data.listCommands;
  }
  async GetEditor(id: string): Promise<GetEditorQuery> {
    const statement = `query GetEditor($id: ID!) {
        getEditor(id: $id) {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEditorQuery>response.data.getEditor;
  }
  async ListEditors(
    filter?: ModelEditorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEditorsQuery> {
    const statement = `query ListEditors($filter: ModelEditorFilterInput, $limit: Int, $nextToken: String) {
        listEditors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEditorsQuery>response.data.listEditors;
  }
  async GetEditorRange(id: string): Promise<GetEditorRangeQuery> {
    const statement = `query GetEditorRange($id: ID!) {
        getEditorRange(id: $id) {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEditorRangeQuery>response.data.getEditorRange;
  }
  async ListEditorRanges(
    filter?: ModelEditorRangeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEditorRangesQuery> {
    const statement = `query ListEditorRanges($filter: ModelEditorRangeFilterInput, $limit: Int, $nextToken: String) {
        listEditorRanges(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            editorId
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subset
            min
            max
            step
            uomId
            uom {
              __typename
              id
              name
              description
              subValues
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEditorRangesQuery>response.data.listEditorRanges;
  }
  async GetNls(id: string): Promise<GetNlsQuery> {
    const statement = `query GetNls($id: ID!) {
        getNls(id: $id) {
          __typename
          id
          name
          description
          subValues
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNlsQuery>response.data.getNls;
  }
  async ListNlss(
    filter?: ModelNlsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNlssQuery> {
    const statement = `query ListNlss($filter: ModelNlsFilterInput, $limit: Int, $nextToken: String) {
        listNlss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            subValues
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNlssQuery>response.data.listNlss;
  }
  async GetUom(id: string): Promise<GetUomQuery> {
    const statement = `query GetUom($id: ID!) {
        getUom(id: $id) {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUomQuery>response.data.getUom;
  }
  async ListUoms(
    filter?: ModelUomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUomsQuery> {
    const statement = `query ListUoms($filter: ModelUomFilterInput, $limit: Int, $nextToken: String) {
        listUoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUomsQuery>response.data.listUoms;
  }
  async GetComplianceLog(id: string): Promise<GetComplianceLogQuery> {
    const statement = `query GetComplianceLog($id: ID!) {
        getComplianceLog(id: $id) {
          __typename
          id
          comment
          complianceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetComplianceLogQuery>response.data.getComplianceLog;
  }
  async ListComplianceLogs(
    filter?: ModelComplianceLogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListComplianceLogsQuery> {
    const statement = `query ListComplianceLogs($filter: ModelComplianceLogFilterInput, $limit: Int, $nextToken: String) {
        listComplianceLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            comment
            complianceId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListComplianceLogsQuery>response.data.listComplianceLogs;
  }
  async GetStatic(id: string): Promise<GetStaticQuery> {
    const statement = `query GetStatic($id: ID!) {
        getStatic(id: $id) {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStaticQuery>response.data.getStatic;
  }
  async ListStatics(
    filter?: ModelStaticFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStaticsQuery> {
    const statement = `query ListStatics($filter: ModelStaticFilterInput, $limit: Int, $nextToken: String) {
        listStatics(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            subValues
            type
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStaticsQuery>response.data.listStatics;
  }
  OnCreateDomainListener: Observable<OnCreateDomainSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDomain {
        onCreateDomain {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateDomainSubscription>;

  OnUpdateDomainListener: Observable<OnUpdateDomainSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDomain {
        onUpdateDomain {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateDomainSubscription>;

  OnDeleteDomainListener: Observable<OnDeleteDomainSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDomain {
        onDeleteDomain {
          __typename
          id
          name
          description
          compliances {
            __typename
            items {
              __typename
              id
              name
              description
              domainId
              domain {
                __typename
                id
                name
                description
                compliances {
                  __typename
                  nextToken
                }
              }
              hint
              state
              author
              lastModifiedBy
              complianceLogs {
                __typename
                items {
                  __typename
                  id
                  comment
                  complianceId
                }
                nextToken
              }
              status {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteDomainSubscription>;

  OnCreateComplianceListener: Observable<
    OnCreateComplianceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompliance {
        onCreateCompliance {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateComplianceSubscription>;

  OnUpdateComplianceListener: Observable<
    OnUpdateComplianceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompliance {
        onUpdateCompliance {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateComplianceSubscription>;

  OnDeleteComplianceListener: Observable<
    OnDeleteComplianceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompliance {
        onDeleteCompliance {
          __typename
          id
          name
          description
          domainId
          domain {
            __typename
            id
            name
            description
            compliances {
              __typename
              items {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
          }
          hint
          state
          author
          lastModifiedBy
          complianceLogs {
            __typename
            items {
              __typename
              id
              comment
              complianceId
            }
            nextToken
          }
          status {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteComplianceSubscription>;

  OnCreateComplianceStatusLinkListener: Observable<
    OnCreateComplianceStatusLinkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComplianceStatusLink {
        onCreateComplianceStatusLink {
          __typename
          id
          complianceId
          statusId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          status {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateComplianceStatusLinkSubscription>;

  OnUpdateComplianceStatusLinkListener: Observable<
    OnUpdateComplianceStatusLinkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComplianceStatusLink {
        onUpdateComplianceStatusLink {
          __typename
          id
          complianceId
          statusId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          status {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateComplianceStatusLinkSubscription>;

  OnDeleteComplianceStatusLinkListener: Observable<
    OnDeleteComplianceStatusLinkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComplianceStatusLink {
        onDeleteComplianceStatusLink {
          __typename
          id
          complianceId
          statusId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          status {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
            editorId
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteComplianceStatusLinkSubscription>;

  OnCreateStatusListener: Observable<OnCreateStatusSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStatus {
        onCreateStatus {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateStatusSubscription>;

  OnUpdateStatusListener: Observable<OnUpdateStatusSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStatus {
        onUpdateStatus {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateStatusSubscription>;

  OnDeleteStatusListener: Observable<OnDeleteStatusSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStatus {
        onDeleteStatus {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              statusId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              status {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
            }
            nextToken
          }
          editorId
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteStatusSubscription>;

  OnCreateComplianceCommandLinkListener: Observable<
    OnCreateComplianceCommandLinkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComplianceCommandLink {
        onCreateComplianceCommandLink {
          __typename
          id
          complianceId
          commandId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          command {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
        }
      }`
    )
  ) as Observable<OnCreateComplianceCommandLinkSubscription>;

  OnUpdateComplianceCommandLinkListener: Observable<
    OnUpdateComplianceCommandLinkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComplianceCommandLink {
        onUpdateComplianceCommandLink {
          __typename
          id
          complianceId
          commandId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          command {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
        }
      }`
    )
  ) as Observable<OnUpdateComplianceCommandLinkSubscription>;

  OnDeleteComplianceCommandLinkListener: Observable<
    OnDeleteComplianceCommandLinkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComplianceCommandLink {
        onDeleteComplianceCommandLink {
          __typename
          id
          complianceId
          commandId
          compliance {
            __typename
            id
            name
            description
            domainId
            domain {
              __typename
              id
              name
              description
              compliances {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                nextToken
              }
            }
            hint
            state
            author
            lastModifiedBy
            complianceLogs {
              __typename
              items {
                __typename
                id
                comment
                complianceId
              }
              nextToken
            }
            status {
              __typename
              items {
                __typename
                id
                complianceId
                statusId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                status {
                  __typename
                  id
                  name
                  description
                  editorId
                }
              }
              nextToken
            }
          }
          command {
            __typename
            id
            name
            description
            compliance {
              __typename
              items {
                __typename
                id
                complianceId
                commandId
                compliance {
                  __typename
                  id
                  name
                  description
                  domainId
                  hint
                  state
                  author
                  lastModifiedBy
                }
                command {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
            editor {
              __typename
              id
              name
              description
              status {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                }
                nextToken
              }
              ranges {
                __typename
                items {
                  __typename
                  id
                  name
                  description
                  editorId
                  subset
                  min
                  max
                  step
                  uomId
                }
                nextToken
              }
            }
            nls {
              __typename
              id
              name
              description
              subValues
            }
            subValues
          }
        }
      }`
    )
  ) as Observable<OnDeleteComplianceCommandLinkSubscription>;

  OnCreateCommandListener: Observable<
    OnCreateCommandSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCommand {
        onCreateCommand {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`
    )
  ) as Observable<OnCreateCommandSubscription>;

  OnUpdateCommandListener: Observable<
    OnUpdateCommandSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCommand {
        onUpdateCommand {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`
    )
  ) as Observable<OnUpdateCommandSubscription>;

  OnDeleteCommandListener: Observable<
    OnDeleteCommandSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCommand {
        onDeleteCommand {
          __typename
          id
          name
          description
          compliance {
            __typename
            items {
              __typename
              id
              complianceId
              commandId
              compliance {
                __typename
                id
                name
                description
                domainId
                domain {
                  __typename
                  id
                  name
                  description
                }
                hint
                state
                author
                lastModifiedBy
                complianceLogs {
                  __typename
                  nextToken
                }
                status {
                  __typename
                  nextToken
                }
              }
              command {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editor {
                  __typename
                  id
                  name
                  description
                }
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subValues
              }
            }
            nextToken
          }
          editor {
            __typename
            id
            name
            description
            status {
              __typename
              items {
                __typename
                id
                name
                description
                compliance {
                  __typename
                  nextToken
                }
                editorId
                editor {
                  __typename
                  id
                  name
                  description
                }
              }
              nextToken
            }
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subValues
        }
      }`
    )
  ) as Observable<OnDeleteCommandSubscription>;

  OnCreateEditorListener: Observable<OnCreateEditorSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateEditor {
        onCreateEditor {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateEditorSubscription>;

  OnUpdateEditorListener: Observable<OnUpdateEditorSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEditor {
        onUpdateEditor {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateEditorSubscription>;

  OnDeleteEditorListener: Observable<OnDeleteEditorSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEditor {
        onDeleteEditor {
          __typename
          id
          name
          description
          status {
            __typename
            items {
              __typename
              id
              name
              description
              compliance {
                __typename
                items {
                  __typename
                  id
                  complianceId
                  statusId
                }
                nextToken
              }
              editorId
              editor {
                __typename
                id
                name
                description
                status {
                  __typename
                  nextToken
                }
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteEditorSubscription>;

  OnCreateEditorRangeListener: Observable<
    OnCreateEditorRangeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEditorRange {
        onCreateEditorRange {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateEditorRangeSubscription>;

  OnUpdateEditorRangeListener: Observable<
    OnUpdateEditorRangeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEditorRange {
        onUpdateEditorRange {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateEditorRangeSubscription>;

  OnDeleteEditorRangeListener: Observable<
    OnDeleteEditorRangeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEditorRange {
        onDeleteEditorRange {
          __typename
          id
          name
          description
          editorId
          nls {
            __typename
            id
            name
            description
            subValues
          }
          subset
          min
          max
          step
          uomId
          uom {
            __typename
            id
            name
            description
            subValues
            ranges {
              __typename
              items {
                __typename
                id
                name
                description
                editorId
                nls {
                  __typename
                  id
                  name
                  description
                  subValues
                }
                subset
                min
                max
                step
                uomId
                uom {
                  __typename
                  id
                  name
                  description
                  subValues
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteEditorRangeSubscription>;

  OnCreateNlsListener: Observable<OnCreateNlsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateNls {
        onCreateNls {
          __typename
          id
          name
          description
          subValues
        }
      }`
    )
  ) as Observable<OnCreateNlsSubscription>;

  OnUpdateNlsListener: Observable<OnUpdateNlsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNls {
        onUpdateNls {
          __typename
          id
          name
          description
          subValues
        }
      }`
    )
  ) as Observable<OnUpdateNlsSubscription>;

  OnDeleteNlsListener: Observable<OnDeleteNlsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNls {
        onDeleteNls {
          __typename
          id
          name
          description
          subValues
        }
      }`
    )
  ) as Observable<OnDeleteNlsSubscription>;

  OnCreateUomListener: Observable<OnCreateUomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUom {
        onCreateUom {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUomSubscription>;

  OnUpdateUomListener: Observable<OnUpdateUomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUom {
        onUpdateUom {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUomSubscription>;

  OnDeleteUomListener: Observable<OnDeleteUomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUom {
        onDeleteUom {
          __typename
          id
          name
          description
          subValues
          ranges {
            __typename
            items {
              __typename
              id
              name
              description
              editorId
              nls {
                __typename
                id
                name
                description
                subValues
              }
              subset
              min
              max
              step
              uomId
              uom {
                __typename
                id
                name
                description
                subValues
                ranges {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUomSubscription>;

  OnCreateComplianceLogListener: Observable<
    OnCreateComplianceLogSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComplianceLog {
        onCreateComplianceLog {
          __typename
          id
          comment
          complianceId
        }
      }`
    )
  ) as Observable<OnCreateComplianceLogSubscription>;

  OnUpdateComplianceLogListener: Observable<
    OnUpdateComplianceLogSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComplianceLog {
        onUpdateComplianceLog {
          __typename
          id
          comment
          complianceId
        }
      }`
    )
  ) as Observable<OnUpdateComplianceLogSubscription>;

  OnDeleteComplianceLogListener: Observable<
    OnDeleteComplianceLogSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComplianceLog {
        onDeleteComplianceLog {
          __typename
          id
          comment
          complianceId
        }
      }`
    )
  ) as Observable<OnDeleteComplianceLogSubscription>;

  OnCreateStaticListener: Observable<OnCreateStaticSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStatic {
        onCreateStatic {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`
    )
  ) as Observable<OnCreateStaticSubscription>;

  OnUpdateStaticListener: Observable<OnUpdateStaticSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStatic {
        onUpdateStatic {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`
    )
  ) as Observable<OnUpdateStaticSubscription>;

  OnDeleteStaticListener: Observable<OnDeleteStaticSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStatic {
        onDeleteStatic {
          __typename
          id
          name
          description
          subValues
          type
        }
      }`
    )
  ) as Observable<OnDeleteStaticSubscription>;
}
