import { ClientAIConfig, ClientPrompt } from "@/src/shared/types";
import { getPromptModelName } from "@/src/utils/promptUtils";
import { AIConfig, JSONObject, PromptInput } from "aiconfig";

type AIConfigReducerAction =
  | UpdatePromptInputAction
  | UpdatePromptModelSettingsAction;

export type UpdatePromptInputAction = {
  type: "UPDATE_PROMPT_INPUT";
  index: number;
  input: PromptInput;
};

export type UpdatePromptModelSettingsAction = {
  type: "UPDATE_PROMPT_MODEL_SETTINGS";
  index: number;
  modelSettings: JSONObject;
};

function reduceReplacePrompt(
  state: ClientAIConfig,
  index: number,
  replacerFn: (prompt: ClientPrompt) => ClientPrompt
): ClientAIConfig {
  return {
    ...state,
    prompts: state.prompts.map((prompt, i) =>
      i === index ? replacerFn(prompt) : prompt
    ),
  };
}

function reduceReplaceInput(
  state: ClientAIConfig,
  index: number,
  replacerFn: (input: PromptInput) => PromptInput
): ClientAIConfig {
  return reduceReplacePrompt(state, index, (prompt) => ({
    ...prompt,
    input: replacerFn(prompt.input),
  }));
}

export default function aiconfigReducer(
  state: ClientAIConfig,
  action: AIConfigReducerAction
): ClientAIConfig {
  switch (action.type) {
    case "UPDATE_PROMPT_INPUT": {
      return reduceReplaceInput(state, action.index, () => action.input);
    }
    case "UPDATE_PROMPT_MODEL_SETTINGS": {
      return reduceReplacePrompt(state, action.index, (prompt) => ({
        ...prompt,
        metadata: {
          ...prompt.metadata,
          model: {
            // TODO: Figure out why 'as' is needed here. Should just be ClientAIConfig and that
            // should properly type metadata
            name: getPromptModelName(
              prompt,
              (state as AIConfig).metadata.default_model
            ),
            settings: action.modelSettings,
          },
        },
      }));
    }
  }
}
