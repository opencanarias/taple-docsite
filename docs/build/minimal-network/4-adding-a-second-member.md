# Adding a second member

To add a second member, we can repeat the previous step but slightly change the body of the request. To do this, I will first run taple-keygen again to create a second cryptographic material that identifies the second member:

```bash
PRIVATE KEY ED25519 (HEX): 388e07385cfd8871f990fe05f82610af1989f7abf5d4e42884c8337498086ba0
CONTROLLER ID ED25519: E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM
PeerID: 12D3KooWRS3QVwqBtNp7rUCG4SF3nBrinQqJYC1N5qc1Wdr4jrze
```

The new request would be:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                    "op": "add",
                    "path": "/members/1",
                    "value": {
                    "id": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
                    "name": "Tutorial2"
                    }
                }
            ]
          }
      }
    }
  }
}
```

```bash
curl --silent 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data '{
    "request": {
        "Fact": {
            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/1",
                            "value": {
                                "id": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
                                "name": "Tutorial2"
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

We must again approve the new request as in the previous case.

## Raise the second node

The first node is going to be sending the events of the governance subject to the controller **E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM**, whose PeerId (identification in LibP2P, the communication library) is **12D3KooWRS3QVwqBtNp7rUCG4SF3nBrinQqJYC1N5qc1Wdr4jrze**. Unfortunately, it will not find it on its network because they are not connected, so we will proceed to raise the second node and connect it to the first:

```bash
docker run -p 3001:3000 -p 50001:50000 \ 
-e TAPLE_SECRET_KEY=388e07385cfd8871f990fe05f82610af1989f7abf5d4e42884c8337498086ba0 \ 
-e TAPLE_HTTP=true opencanarias/taple-client:0.2 \ 
-e TAPLE_NETWORK_KNOWN_NODE=/ip4/127.0.0.1/tcp/50000/p2p/12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B \ 
-e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

Replace addr with the ip that the second node can find the first. It depends on whether the containers are launched on a docker network, on the host network... here we are assuming that they are on the host network.

Now that it is up and finds the others from a bootstrap on **TAPLE_NETWORK_KNOWN_NODE**. Events from the governance will begin to arrive at the second node, although they will not yet be saved in its database. This is because governances always have to be pre-authorized to allow the reception of their events. For this, the endpoint **/api/allowed-subjects/{{governance_id}}** and the **PUT** method are used. Remember that in this case it must be launched on the second node, which, due to the configuration we have set, will be listening on port 3001 of localhost. The second node will now correctly update with the governance subject.

```bash
curl --silent --request PUT 'http://localhost:3001/api/allowed-subjects/Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M' \
--header 'Content-Type: application/json' \
--data '{
    "providers": []
}'
```

Response:

```json
{"providers":[]}
```

## Modify the governance

As we have seen previously, the governance contract currently only has one method to modify its state, the Patch method. This method includes an object with a data attribute which in turn is an array representing a json-patch. This patch will be applied to the current state of the governance to modify it. Also when making the modification it is checked that the obtained state is valid for a governance, not only by performing the validation with the governance schema itself but also by performing exhaustive checks, such as that there are no repeated members, each defined schema in turn has some policies...

To facilitate obtaining the result we want and generate the specific json-patch we can use the taple-patch tool, included among the [taple-tools](../../learn/client-tools.md). This executable is passed the current state and the desired state and generates the corresponding patch after whose application one passes from one to another.

and send the request, make the approval etc...

For an example, we will make all the members of the governance approvers, for this we must add the role:

```json
{
    "namespace": "",
    "role": "APPROVER",
    "schema": {
        "ID": "governance"
    },
    "who": "MEMBERS"
}
```

So the json patch that we have to apply will be:

```json
[
  {
    "op": "add",
    "path": "/roles/1",
    "value": {
        "namespace": "",
        "role": "APPROVER",
        "schema": {
            "ID": "governance"
        },
        "who": "MEMBERS"
    }
  }
]
```

So the body of the request will be:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                  "op": "add",
                  "path": "/roles/1",
                  "value": {
                      "namespace": "",
                      "role": "APPROVER",
                      "schema": {
                          "ID": "governance"
                      },
                      "who": "MEMBERS"
                  }
                }
              ]
          }
      }
    }
  }
}
```

```bash
curl --silent 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data '{
    "request": {
        "Fact": {
            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/roles/1",
                            "value": {
                                "namespace": "",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "governance"
                                },
                                "who": "MEMBERS"
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

Even though the following state says that both are approvers, to calculate the signatories of the different phases the current state of the subject is used, prior to applying the change in the state of this new event that we are creating, so the only approver right now will continue to be the first node for being the owner of the governance, so we must repeat the previous authorization step.
