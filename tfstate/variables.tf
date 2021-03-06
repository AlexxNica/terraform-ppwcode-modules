/**
 *    Copyright 2017 PeopleWare n.v.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

variable "organisation_name" {
  type = "string"

  description = <<DESCRIPTION
Identification of the organisation whose infrastructure this will be the root of.
Used as suffix in S3 bucket names, which have to be globally unique.
This should be the domain name of the organisation.
DESCRIPTION
}

variable "region" {
  type = "string"

  description = <<DESCRIPTION
Identification of the region you want to deploy the Terraform meta-infrastructure in.
The default is "eu-west-1".
DESCRIPTION

  default = "eu-west-1"
}

variable "tags" {
  type = "map"

  description = <<DESCRIPTION
Tags that are added to created resources (buckets) where possible.
Note that tags are not supported for DynamoDB tables.
The default is an empty map.
DESCRIPTION

  default = {}
}
