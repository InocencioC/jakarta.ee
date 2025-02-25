---
title: "Guide to the Jakarta EE Specification Process"
date: "2021-03-04T00:00:00+00:00"
description: |
  A comprehensive guide to the Jakarta EE Specification Process (JESP). Learn
  the steps involved in creating, planning, releasing, and reviewing Jakarta EE
  specifications.
layout: "single"
headline: Guide to the Jakarta EE Specification Process
hide_page_title: true
hide_sidebar: true
aliases:
    - committees/specification/guide/
---

## Content

- [Introduction]({{< ref "#intro" >}})
- [Creation Review]({{< ref "#creation" >}})
- [Plan Review]({{< ref "#plan" >}})
- [Release Review]({{< ref "#release" >}})
- [Service Release]({{< ref "#service" >}})
- [Progress Review]({{< ref "#progress" >}}) *(optional)*

## Introduction {#intro}

This article is a self-contained, step-by-step, practical guide to help developers navigate the Jakarta EE Specification Process ([JESP](https://jakarta.ee/about/jesp/)). 

It is meant as a helpful tool, so **if in doubt, always refer to the [JESP](https://jakarta.ee/about/jesp/) for completeness**. Contact the [Specification Committee](mailto:jakarta.ee-spec@eclipse.org) if you have any questions or comments about anything related to the development of Jakarta EE Specifications. The [JESP](https://jakarta.ee/about/jesp/) is an adaptation of the Eclipse Foundation Specification Process ([EFSP](https://www.eclipse.org/projects/efsp/)), which is itself an adaptation of the Eclipse Foundation Development Process ([EDP](https://www.eclipse.org/projects/dev_process/)).

This diagram is the Eclipse Specification Version Lifecycle.  It shows the steps to create and evolve a Specification.

![Eclipse Release Cycle](JESP.png)

The most important kind of step in the lifecycle is the **Review** step. A Review is an event that takes place over a week or two of calendar time. The team developing a Specification creates some kind of artifact and submits it to the Specification Committee for review. The Specifiation Committee has a short amount of time to review the submitted artifact and conduct a ballot among its members to approve or not-approve that artifact under review. This guide contains a sufficient explanation of Review, but if you want the full definition, see the [Eclipse Foundation Specification Process](https://www.eclipse.org/projects/efsp/?version=1.3#efsp-reviews) and the [Eclipse Foundation Development Process](https://www.eclipse.org/projects/dev_process/#6_3_Reviews).


The remainder of this guide explains the different kinds of Review steps, and the steps you need to take for each one.

## Creation Review {#creation}

![Creation Review](JESP_creation-review.png)

* A Jakarta Specification project is created as any other project under the Eclipse Development Process ([EDP](https://www.eclipse.org/projects/dev_process/)).
* It is possible to convert an existing project into a Specification project.
* A Jakarta Specification project must be approved by the Specification Committee.
* Read more about [creation reviews](https://www.eclipse.org/projects/efsp/#efsp-reviews-creation) in the EFSP.

### Steps Involved

1. Create a Project Proposal (*).
2. Submit a Pull Request to the [Jakarta EE Specifications repository](https://github.com/jakartaee/specifications) using the **[Creation Review template](https://github.com/jakartaee/specifications/blob/master/.github/PULL_REQUEST_TEMPLATE/creation_review_pr_template.md)**.
3. Send an email to the [Specification Committee](mailto:jakarta.ee-spec@eclipse.org) to request a Creation Review.
4. Wait for a successful Creation Review before proceeding.

(*) It may be a good idea to socialize the idea with the Specification Committee to solicit support before proceeding with the project creation.

## Plan Review {#plan}

![Plan Review](JESP_plan-review.png)

* Each specification project needs to engage in a Plan Review prior to any extensive development effort in support of a new Specification Major or Minor Version. 
* Plan reviews are not required for [Service Releases]({{< ref "#service" >}}).
* Read more about [Plan Reviews](https://www.eclipse.org/projects/efsp/#efsp-reviews-plan) in the EFSP.

### Steps Involved

1. Submit a Pull Request to the [Jakarta EE Specifications repository](https://github.com/jakartaee/specifications) using the **[Plan Review template](https://github.com/jakartaee/specifications/blob/master/.github/PULL_REQUEST_TEMPLATE/plan_review_pr_template.md)**.
2. Send an email to the [Specification Committee](mailto:jakarta.ee-spec@eclipse.org) to request a Plan Review.
3. Wait for a successful Plan Review before proceeding.

## Release Review {#release}

![Release Review](JESP_release-review.png)

* A final version of a specification cannot be made generally available until after engaging in a successful Release Review (with corresponding super-majority approval from the specification committee).
* Read more about [Release Reviews](https://www.eclipse.org/projects/efsp/#efsp-reviews-release) in the EFSP.

### Steps Involved

1. Submit a Pull Request to the [Jakarta EE Specifications repository](https://github.com/jakartaee/specifications) using the **[Release Review template](https://github.com/jakartaee/specifications/blob/master/.github/PULL_REQUEST_TEMPLATE/pull_request_template.md)**.
2. Send an email to the [Specification Committee](mailto:jakarta.ee-spec@eclipse.org) to request a Release Review.
3. Wait for a successful Release Review before proceeding with the release.

## Service Release {#service}

* There is no formal Release Review required for a Specification service release (x.y.z) as long as the JESP definition of a “service release” is adhered to.
* That means that no functionality changes or increase in IP scope are permitted in a service release. 
* Read more about [service releases](https://www.eclipse.org/projects/efsp/#efsp-releases-service) in the EFSP as well as in the [JESP](https://jakarta.ee/about/jesp/).

### Steps Involved

1. Submit a Pull Request to the [Jakarta EE Specifications repository](https://github.com/jakartaee/specifications) using the **[service release template](https://github.com/jakartaee/specifications/blob/master/.github/PULL_REQUEST_TEMPLATE/service_release_pr_template.md)**.
2. Send an email to the [Specification Committee](mailto:jakarta.ee-spec@eclipse.org) to announce that the PR is ready for review.
3. Wait for the PR approval and merge before proceeding.

## Progress Review {#progress}

![Progress Review](JESP_progress-review.png)

* Progress Reviews are not part of the normal flow of the JESP: *creation->plan->release->plan->release->plan->release* and so on.
* A Progress Review can be initiated by the project when they want to inform the specification committee about their progress, but are not ready for a release yet.
* A Progress Review may be requested by the specification committee if no progress has been made in 12 months.
* Read more about [Progress Reviews](https://www.eclipse.org/projects/efsp/#efsp-reviews-progress) in the EFSP.

### Steps Involved

1. Submit a Pull Request to the [Jakarta EE Specifications repository](https://github.com/jakartaee/specifications) using the **[Progress Review template](https://github.com/jakartaee/specifications/blob/master/.github/PULL_REQUEST_TEMPLATE/progress_review_pr_template.md)**.
2. Send an email to the [Specification Committee](mailto:jakarta.ee-spec@eclipse.org) to request a Plan Review.
3. Wait for a successful Progress Review before proceeding.
