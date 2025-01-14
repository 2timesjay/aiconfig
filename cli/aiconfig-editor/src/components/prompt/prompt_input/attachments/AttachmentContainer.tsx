import { memo } from "react";
import type { Attachment as InputAttachment } from "aiconfig";
import { PromptInputObjectAttachmentsSchema } from "@/src/utils/promptUtils";
import Attachment from "@/src/components/prompt/prompt_input/attachments/Attachment";
import { ActionIcon, Container, Flex, Tooltip } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import AttachmentMetadata from "@/src/components/prompt/prompt_input/attachments/AttachmentMetadata";

type Props = {
  schema: PromptInputObjectAttachmentsSchema;
  attachment: InputAttachment;
  onUpdateMetadata?: (metadata: { [k: string]: any }) => void;
  onRemoveAttachment?: () => void;
  onEditAttachment?: () => void;
};

export default memo(function AttachmentContainer({
  schema,
  attachment,
  onUpdateMetadata,
  onRemoveAttachment,
  onEditAttachment,
}: Props) {
  return (
    <Container display="flex">
      <Flex direction="column">
        {onEditAttachment && (
          <ActionIcon onClick={onEditAttachment}>
            <Tooltip label="Edit attachment">
              <IconEdit size={16} />
            </Tooltip>
          </ActionIcon>
        )}
        {onRemoveAttachment && (
          <ActionIcon onClick={onRemoveAttachment}>
            <Tooltip label="Remove attachment">
              <IconTrash size={16} color="red" />
            </Tooltip>
          </ActionIcon>
        )}
      </Flex>
      <Attachment attachment={attachment} />
      {schema.items.properties?.metadata && (
        <AttachmentMetadata
          schema={schema.items.properties.metadata}
          attachment={attachment}
          onUpdateMetadata={onUpdateMetadata}
        />
      )}
    </Container>
  );
});
