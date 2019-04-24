# frozen_string_literal: true

module DfEDataTables
  module DataElementParsers
    class Isp < Sheet
    private

      def regex
        /ISP#{YEARS_REGEX}/
      end

      def first_row_regex
        %r{(Placement/Student|Funding|Support)}
      end
    end
  end
end
